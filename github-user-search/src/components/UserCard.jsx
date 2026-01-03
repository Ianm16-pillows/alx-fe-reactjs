export default function UserCard({ user }) {
  return (
    <div className="border rounded-md p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
      <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
      <div>
        <h3 className="text-lg font-semibold">{user.login}</h3>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}
