<?php
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */

namespace PrestaShop\PrestaShop\Core\Domain\Order\Command;

use PrestaShop\PrestaShop\Core\Domain\Cart\ValueObject\CartId;
use PrestaShop\PrestaShop\Core\Domain\Employee\ValueObject\EmployeeId;
use PrestaShop\PrestaShop\Core\Domain\Employee\ValueObject\EmployeeIdInterface;
use PrestaShop\PrestaShop\Core\Domain\Employee\ValueObject\NoEmployeeId;
use PrestaShop\PrestaShop\Core\Domain\Order\Exception\InvalidOrderStateException;
use PrestaShopBundle\Exception\InvalidModuleException;

/**
 * Adds new order from given cart.
 */
class AddOrderFromBackOfficeCommand
{
    /**
     * @var CartId
     */
    private $cartId;

    /**
     * @var string
     */
    private $orderMessage;

    /**
     * @var string
     */
    private $paymentModuleName;

    /**
     * @var int
     */
    private $orderStateId;

    /**
     * @var EmployeeIdInterface
     */
    private $employeeId;

    /**
     * @param int $cartId
     * @param int $employeeId
     * @param string $orderMessage
     * @param string $paymentModuleName
     * @param int $orderStateId
     */
    public function __construct($cartId, $employeeId, $orderMessage, $paymentModuleName, $orderStateId)
    {
        $this->assertIsModuleName($paymentModuleName);
        $this->assertOrderStateIsPositiveInt($orderStateId);

        $this->cartId = new CartId($cartId);
        $this->employeeId = $employeeId === NoEmployeeId::NO_EMPLOYEE_ID_VALUE ? new NoEmployeeId() : new EmployeeId($employeeId);
        $this->orderMessage = $orderMessage;
        $this->paymentModuleName = $paymentModuleName;
        $this->orderStateId = $orderStateId;
    }

    /**
     * @return CartId
     */
    public function getCartId()
    {
        return $this->cartId;
    }

    /**
     * @return string
     */
    public function getOrderMessage()
    {
        return $this->orderMessage;
    }

    /**
     * @return string
     */
    public function getPaymentModuleName()
    {
        return $this->paymentModuleName;
    }

    /**
     * @return int
     */
    public function getOrderStateId()
    {
        return $this->orderStateId;
    }

    /**
     * @return EmployeeIdInterface
     */
    public function getEmployeeId()
    {
        return $this->employeeId;
    }

    /**
     * @param string $moduleName
     *
     * @throws InvalidModuleException
     */
    private function assertIsModuleName($moduleName)
    {
        if (!is_string($moduleName) || !preg_match('/^[a-zA-Z0-9_-]+$/', $moduleName)) {
            throw new InvalidModuleException();
        }
    }

    /**
     * @param int $orderStateId
     *
     * @throws InvalidOrderStateException
     */
    private function assertOrderStateIsPositiveInt($orderStateId)
    {
        if (!is_int($orderStateId) || 0 >= $orderStateId) {
            throw new InvalidOrderStateException(
                InvalidOrderStateException::INVALID_ID,
                'Invalid order state id'
            );
        }
    }
}
