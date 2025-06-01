export function UserAddress({ address }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium mb-1">Адрес</h3>
      <p className="text-gray-700">
        {address.street}, {address.city}, {address.zip}, {address.country}
      </p>
    </div>
  );
}
