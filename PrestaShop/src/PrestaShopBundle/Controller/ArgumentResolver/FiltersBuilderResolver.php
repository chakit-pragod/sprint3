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

namespace PrestaShopBundle\Controller\ArgumentResolver;

use PrestaShop\PrestaShop\Core\Domain\Shop\ValueObject\ShopConstraint;
use PrestaShop\PrestaShop\Core\Search\Builder\FiltersBuilderInterface;
use PrestaShop\PrestaShop\Core\Search\Filters;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Controller\ArgumentValueResolverInterface;
use Symfony\Component\HttpKernel\ControllerMetadata\ArgumentMetadata;

/**
 * This argument resolver uses the FiltersBuilderInterface service to automatically
 * instantiate and inject parameters in controllers.
 */
class FiltersBuilderResolver implements ArgumentValueResolverInterface
{
    /** @var FiltersBuilderInterface */
    private $builder;

    /**
     * @param FiltersBuilderInterface $builder
     */
    public function __construct(FiltersBuilderInterface $builder)
    {
        $this->builder = $builder;
    }

    /**
     * {@inheritdoc}
     */
    public function supports(Request $request, ArgumentMetadata $argument): bool
    {
        return is_subclass_of($argument->getType(), Filters::class);
    }

    /**
     * {@inheritdoc}
     */
    public function resolve(Request $request, ArgumentMetadata $argument): iterable
    {
        // The shop constraint should be added in the request attributes by another listener (@see ShopConstraintListener)
        $shopConstraint = null;
        if ($request->attributes->has('shopConstraint') && $request->attributes->get('shopConstraint') instanceof ShopConstraint) {
            $shopConstraint = $request->attributes->get('shopConstraint');
        }

        $this->builder->setConfig([
            'filters_class' => $argument->getType(),
            'request' => $request,
            'shop_constraint' => $shopConstraint,
        ]);

        $filters = $this->builder->buildFilters();

        yield $filters;
    }
}
