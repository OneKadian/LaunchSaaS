const StripePricingTable = () => {
  return (
    <div className="bg-gray-900 py-24 lg:py-32">
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table
        pricing-table-id="prctbl_1OIXnISJ8icdk6axFBN6jN0X"
        publishable-key="pk_live_51NzbPASJ8icdk6axwRfuxOPJUHuWKZrSFS28fYXV8hlKVbufxw9EFzskcoS6vjKGHKwBqySzuJvRKiTzLidFhwHM00ojBUhy3b"
      ></stripe-pricing-table>
    </div>
  );
};

export default StripePricingTable;
