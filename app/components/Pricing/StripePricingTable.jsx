const StripePricingTable = () => {
  return (
    <div className="bg-gray-900 py-24 lg:py-32">
      {/* Test table below  */}
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table
        pricing-table-id="prctbl_1OKKyaSJ8icdk6axPpiYbkW2"
        publishable-key="pk_test_51NzbPASJ8icdk6axC83MTjzkq0ZB2sBmKwj4CXVlVWgikVCKJWp7mXVfSTKFEwFbXGImMaRzxAaL8sm0kgzK89HZ005qHaSis1"
      ></stripe-pricing-table>
    </div>
  );
};

export default StripePricingTable;
