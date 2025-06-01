export function UserAvatar({ name, email, avatarUrl, isVerified }) {
  return (
    <div className="flex items-center space-x-4">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="Аватар"
          className="w-16 h-16 rounded-full object-cover"
        />
      ) : (
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
          {name?.charAt(0).toUpperCase()}
        </div>
      )}
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p
          className={`text-sm ${
            isVerified ? "text-green-600" : "text-red-500"
          }`}
        >
          {isVerified ? "Email подтвержден" : "Email не подтвержден"}
        </p>
      </div>
    </div>
  );
}
