# Stripe Integration Details

This document lists the Stripe products, prices, and payment links created for the Zoku Fitness membership page.

## Products & Prices

### Drop-In
- **Product ID**: prod_TXGDUvFrQScNhf
- **Price**: $25.00 (One-time)
- **Payment Link**: https://buy.stripe.com/test_8x2aEXf2F6mL37m0VKejK00

### Unlimited Membership
- **Product ID**: prod_TXGDmkXsiE6XMy
- **Monthly Price**: $149.00
  - **Link**: https://buy.stripe.com/test_bJeeVdaMpcL9gYc1ZOejK01
- **Yearly Price**: $1,490.00
  - **Link**: https://buy.stripe.com/test_dRmdR9bQtbH55fu47WejK02

### Annual Membership
- **Product ID**: prod_TXGE5nMWmvpUTW
- **Monthly Price**: $129.00
  - **Link**: https://buy.stripe.com/test_28E9AT1bP4eDfU80VKejK03
- **Yearly Price**: $1,290.00
  - **Link**: https://buy.stripe.com/test_8x27sL2fT7qP9vK33SejK04

### Premium Membership
- **Product ID**: prod_TXGERcDhtzmG7B
- **Monthly Price**: $249.00
  - **Link**: https://buy.stripe.com/test_28EaEX2fTcL94bq1ZOejK05
- **Yearly Price**: $2,490.00
  - **Link**: https://buy.stripe.com/test_00w00jcUx4eDgYcawkejK06

## Integration Notes

- The `MembershipPage` (`src/app/membership/page.tsx`) has been updated to use these links.
- The `PricingModule` (`src/components/ui/pricing-module.tsx`) was updated to pass the billing cycle (`isAnnual`) to the selection handler.
- Calendly integration has been removed from the Membership page.
