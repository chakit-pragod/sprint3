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

namespace PrestaShop\PrestaShop\Adapter\Kpi;

use HelperKpi;
use PrestaShop\PrestaShop\Adapter\LegacyContext;
use PrestaShop\PrestaShop\Core\ConfigurationInterface;
use PrestaShop\PrestaShop\Core\Kpi\KpiInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * @internal
 */
final class ConversionRateKpi implements KpiInterface
{
    public function __construct(
        private readonly TranslatorInterface $translator,
        private readonly ConfigurationInterface $configuration,
        private readonly LegacyContext $contextAdapter
    ) {
    }

    /**
     * {@inheritdoc}
     */
    public function render()
    {
        $helper = new HelperKpi();
        $helper->id = 'box-conversion-rate';
        $helper->icon = 'assessment';
        $helper->color = 'color1';
        $helper->title = $this->translator->trans('Conversion Rate', [], 'Admin.Global');
        $helper->subtitle = $this->translator->trans('30 days', [], 'Admin.Global');

        if ($this->configuration->get('CONVERSION_RATE') !== false) {
            $helper->value = $this->configuration->get('CONVERSION_RATE');
        }

        if ($this->configuration->get('CONVERSION_RATE_CHART') !== false) {
            $helper->data = $this->configuration->get('CONVERSION_RATE_CHART');
        }

        $helper->source = $this->contextAdapter->getAdminLink('AdminStats', true, [
            'ajax' => 1,
            'action' => 'getKpi',
            'kpi' => 'conversion_rate',
        ]);
        $helper->refresh = $this->configuration->get('CONVERSION_RATE_EXPIRE') < time();

        return $helper->generate();
    }
}
