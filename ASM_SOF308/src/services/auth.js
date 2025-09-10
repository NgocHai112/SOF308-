export function getCurrentUser() {
  try {
    // Lấy chuỗi JSON từ localStorage và chuyển thành object
    const userJson = localStorage.getItem("currentUser");
    return JSON.parse(userJson);
  } catch (error) {
    // Nếu lỗi (dữ liệu hỏng hoặc không tồn tại) thì trả về null
    return null;
  }
}

export function isLoggedIn() {
  // Kiểm tra có người dùng hay chưa (khác null và undefined)
  if (getCurrentUser() !== null && getCurrentUser() !== undefined) {
    return true;
  } else {
    return false;
  }
}

export function isAdmin() {
  // Lấy thông tin người dùng
  const u = getCurrentUser();

  // Kiểm tra tồn tại và role là admin
  if (u !== null && u !== undefined && u.role === "admin") {
    return true;
  } else {
    return false;
  }
}
