export function ensureSeedUsers() {
  const raw = localStorage.getItem("users") || "[]";
  let users = [];
  try {
    users = JSON.parse(raw);
  } catch {
    users = [];
  }

  // migrate: thêm role mặc định cho user cũ
  let changed = false;
  users = users.map((u) =>
    u && !u.role ? ((changed = true), { ...u, role: "user" }) : u
  );
  if (changed) localStorage.setItem("users", JSON.stringify(users));

  // seed admin nếu chưa có
  if (!users.some((u) => u.role === "admin")) {
    users.push({
      name: "Admin",
      email: "admin@local",
      password: "admin123",
      avatar: "",
      role: "admin",
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
}
