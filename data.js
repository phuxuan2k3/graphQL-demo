// Array of Vietnamese book authors
const authors = [
  { id: 1, name: "Nguyễn Nhật Ánh" },
  { id: 2, name: "Nam Cao" },
  { id: 3, name: "Xuân Quỳnh" },
  { id: 4, name: "Nguyễn Du" },
  { id: 5, name: "Tô Hoài" },
];

// Array of books belonging to the authors
const books = [
  { id: 1, name: "Cho Tôi Xin Một Vé Đi Tuổi Thơ", authorID: 1 },
  { id: 2, name: "Tắt Đèn", authorID: 2 },
  { id: 3, name: "Lặng Lẽ Sa Pa", authorID: 2 },
  { id: 4, name: "Truyện Kiều", authorID: 4 },
  { id: 5, name: "Dế Mèn Phiêu Lưu Ký", authorID: 5 },
  { id: 6, name: "Bầu Trời Trong Quả Trứng", authorID: 3 },
];

module.exports = { authors, books };
