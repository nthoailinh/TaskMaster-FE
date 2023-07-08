import axios from "axios";
import API_URL from "@/constants";

export let upcomingTask = [
  {
    id: 1,
    color: "#2196f3",
    taskName: "GR1",
    workspace: "HUST",
    time: {
      startTime: {
        hour: "15:00",
        day: "02/07/2023",
      },
      endTime: {
        hour: "18:00",
        day: "03/07/2023",
      },
      deadlineTime: {
        hour: "21:00",
        day: "04/07/2023",
      },
    },
    description: "Áp dụng Machine Learning vào dự đoán lưu lượng mạng SDN",
    footer: {
      priority: "Không khẩn cấp",
      status: "Đã hoàn thành",
    },
    type: "Personal",
    rating: 5,
  },
  {
    id: 3,
    color: "#ffeb3a",
    taskName: "AWS Spot Instance",
    workspace: "Clevai",
    time: {
      startTime: {
        hour: "17:00",
        day: "29/06/2023",
      },
      endTime: {
        hour: "18:00",
        day: "30/06/2023",
      },
      deadlineTime: {
        hour: "19:00",
        day: "30/06/2023",
      },
    },
    description: "Hoàn thiện slide để trình bày tại Clevai",
    footer: {
      priority: "Không quan trọng",
      status: "Đang thực hiện",
    },
    type: "Personal",
    rating: 5,
  },
  {
    id: 7,
    color: "#f34336",
    taskName: "Học flutter",
    workspace: "Vbee",
    time: {
      startTime: {
        hour: "00:00",
        day: "25/06/2023",
      },
      endTime: {
        hour: "00:00",
        day: "30/06/2023",
      },
      deadlineTime: {
        hour: "00:00",
        day: "30/06/2023",
      },
    },
    description: "Học flutter để làm các dự án mobile của công ty",
    footer: {
      priority: "Không khẩn cấp",
      status: "Đã hoàn thành",
    },
    type: "Personal",
    rating: 3,
  },
  {
    id: 8,
    color: "#ffeb3a",
    taskName: "Phát triển mô hình ML mới",
    workspace: "BKC",
    time: {
      startTime: {
        hour: "00:00",
        day: "25/06/2023",
      },
      endTime: {
        hour: "00:00",
        day: "01/07/2023",
      },
      deadlineTime: {
        hour: "00:00",
        day: "04/07/2023",
      },
    },
    description:
      "Phát triển mô hình ML mới để phục vụ nhân diện khuôn mặt dưới trời mưa",
    footer: {
      priority: "Không khẩn cấp",
      status: "Đang thực hiện",
    },
    type: "Personal",
    rating: 4,
  },
  {
    id: 9,
    color: "#ffeb3a",
    taskName: "Học keras",
    workspace: "BKC",
    time: {
      startTime: {
        hour: "00:00",
        day: "23/06/2023",
      },
      endTime: {
        hour: "00:00",
        day: "29/06/2023",
      },
      deadlineTime: {
        hour: "00:00",
        day: "30/06/2023",
      },
    },
    description: "Học keras để implement các mô hình sau quá trình nghiên cứu",
    footer: {
      priority: "Không khẩn cấp",
      status: "Đang thực hiện",
    },
    type: "Personal",
    rating: 5,
  },
  {
    color: "#2196f3",
    taskName: "Viết user stories",
    workspace: "HUST",
    time: {
      startTime: {
        hour: "10:00",
        day: "30/04/2023",
      },
      endTime: {
        hour: "23:59",
        day: "03/05/2023",
      },
      deadlineTime: {
        hour: "23:59",
        day: "04/05/2023",
      },
    },
    description:
      "Viết theo mẫu: “As a [role], I want [feature] because [reason].”",
    footer: {
      priority: "Khẩn cấp",
      status: "Đã hoàn thành",
    },
    type: "Group",
    group: "Nhóm TaskMaster",
    member: [
      {
        value: "Nguyễn Hoàng Anh",
        label: "Nguyễn Hoàng Anh",
        id: 5,
        name: "Nguyễn Hoàng Anh",
        password: "123456789",
        email: "anh@gmail.com",
      },
    ],
    rating: 4,
    id: 10,
  },
  {
    color: "#2196f3",
    taskName: "Viết user persona",
    workspace: "HUST",
    time: {
      startTime: {
        hour: "10:00",
        day: "30/04/2023",
      },
      endTime: {
        hour: "23:59",
        day: "02/05/2023",
      },
      deadlineTime: {
        hour: "23:59",
        day: "04/05/2023",
      },
    },
    description:
      "Mỗi user persona trả lời các câu hỏi: Who are they? What is their main goal? What is their main barrier to achieving this goal?",
    footer: {
      priority: "Khẩn cấp",
      status: "Đã hoàn thành",
    },
    type: "Group",
    group: "Nhóm TaskMaster",
    member: [
      {
        value: "Đàm Ngọc Khánh",
        label: "Đàm Ngọc Khánh",
        id: 4,
        name: "Đàm Ngọc Khánh",
        password: "123456789",
        email: "khanh@gmail.com",
      },
    ],
    rating: 4,
    id: 11,
  },
  {
    color: "#2196f3",
    taskName: "Viết empathy map",
    workspace: "HUST",
    time: {
      startTime: {
        hour: "10:20",
        day: "30/04/2023",
      },
      endTime: {
        hour: "23:59",
        day: "03/05/2023",
      },
      deadlineTime: {
        hour: "23:59",
        day: "04/05/2023",
      },
    },
    description: "Viết những gì người dùng does, says, thinks, feels",
    footer: {
      priority: "Khẩn cấp",
      status: "Đã hoàn thành",
    },
    type: "Group",
    group: "Nhóm TaskMaster",
    member: [
      {
        value: "Nguyễn Hoàng Anh",
        label: "Nguyễn Hoàng Anh",
        id: 5,
        name: "Nguyễn Hoàng Anh",
        password: "123456789",
        email: "anh@gmail.com",
      },
      {
        value: "Đàm Ngọc Khánh",
        label: "Đàm Ngọc Khánh",
        id: 4,
        name: "Đàm Ngọc Khánh",
        password: "123456789",
        email: "khanh@gmail.com",
      },
    ],
    rating: 5,
    id: 12,
  },
  {
    id: 13,
    color: "#2196f3",
    taskName: "Vẽ IFML cho 3 usecase đầu",
    workspace: "HUST",
    time: {
      startTime: {
        hour: "10:35",
        day: "23/04/2023",
      },
      endTime: {
        hour: "10:35",
        day: "29/04/2023",
      },
      deadlineTime: {
        hour: "11:59",
        day: "08/05/2023",
      },
    },
    description: "3 usecase Chọn món, Đặt hàng, Quản lý giỏ hàng",
    footer: {
      priority: "Khẩn cấp",
      status: "Đã hoàn thành",
    },
    type: "Group",
    group: "Nhóm PTTKHT",
    member: [
      {
        value: "Vũ Minh Long",
        label: "Vũ Minh Long",
        id: 3,
        name: "Vũ Minh Long",
        password: "123456789",
        email: "long@gmail.com",
      },
      {
        value: "Đàm Ngọc Khánh",
        label: "Đàm Ngọc Khánh",
        id: 4,
        name: "Đàm Ngọc Khánh",
        password: "123456789",
        email: "khanh@gmail.com",
      },
    ],
    rating: 5,
  },
  {
    id: 14,
    color: "#2196f3",
    taskName: "Code mẫu thử giao diện độ tin cậy cao",
    workspace: "HUST",
    time: {
      startTime: {
        hour: "10:00",
        day: "21/06/2023",
      },
      endTime: {
        hour: "15:50",
        day: "01/07/2023",
      },
      deadlineTime: {
        hour: "11:59",
        day: "14/07/2023",
      },
    },
    description: "Code theo mẫu thiết kế đã có ở figma",
    footer: {
      priority: "Khẩn cấp",
      status: "Đang thực hiện",
    },
    type: "Group",
    group: "Nhóm TaskMaster",
    member: [
      {
        value: "Phan Minh Anh Tuấn",
        label: "Phan Minh Anh Tuấn",
        id: 1,
        name: "Phan Minh Anh Tuấn",
        password: "123456789",
        email: "tuan@gmail.com",
      },
      {
        value: "Vũ Minh Long",
        label: "Vũ Minh Long",
        id: 3,
        name: "Vũ Minh Long",
        password: "123456789",
        email: "long@gmail.com",
      },
      {
        value: "Nguyễn Thị Hoài Linh",
        label: "Nguyễn Thị Hoài Linh",
        id: 2,
        name: "Nguyễn Thị Hoài Linh",
        password: "123456789",
        email: "linh@gmail.com",
      },
      {
        value: "Đàm Ngọc Khánh",
        label: "Đàm Ngọc Khánh",
        id: 4,
        name: "Đàm Ngọc Khánh",
        password: "123456789",
        email: "khanh@gmail.com",
      },
    ],
    rating: 0,
  },
  {
    id: 15,
    color: "#ffeb3a",
    taskName: "Sửa API xem request log",
    workspace: "BKC",
    time: {
      startTime: {
        hour: "10:45",
        day: "26/06/2023",
      },
      endTime: {
        hour: "10:45",
        day: "02/07/2023",
      },
      deadlineTime: {
        hour: "10:00",
        day: "03/07/2023",
      },
    },
    description:
      "Sửa định dạng dữ liệu trường message về dạng json. Phân trang.",
    footer: {
      priority: "Không khẩn cấp",
      status: "Chưa thực hiện",
    },
    type: "Group",
    group: "Nhóm ACR",
    member: [
      {
        value: "Nguyễn Thị Hoài Linh",
        label: "Nguyễn Thị Hoài Linh",
        id: 2,
        name: "Nguyễn Thị Hoài Linh",
        password: "123456789",
        email: "linh@gmail.com",
      },
    ],
    rating: 0,
  },
  {
    id: 16,
    color: "#f34336",
    taskName: "Họp bàn giải pháp",
    workspace: "Vbee",
    time: {
      startTime: {
        hour: "09:50",
        day: "26/06/2023",
      },
      endTime: {
        hour: "11:50",
        day: "26/06/2023",
      },
      deadlineTime: {
        hour: "10:50",
        day: "30/06/2023",
      },
    },
    description: "Cần làm những gì để chuyển từ GG Cloud sang AWS",
    footer: {
      priority: "Khẩn cấp",
      status: "Đang thực hiện",
    },
    type: "Group",
    group: "Nhóm AWS",
    member: [
      {
        value: "Nguyễn Hoàng Anh",
        label: "Nguyễn Hoàng Anh",
        id: 5,
        name: "Nguyễn Hoàng Anh",
        password: "123456789",
        email: "anh@gmail.com",
      },
      {
        value: "Vũ Minh Long",
        label: "Vũ Minh Long",
        id: 3,
        name: "Vũ Minh Long",
        password: "123456789",
        email: "long@gmail.com",
      },
    ],
    rating: 0,
  },
  {
    id: 17,
    color: "#ffeb3a",
    taskName: "Tìm hiểu single sign on",
    workspace: "BKC",
    time: {
      startTime: {
        hour: "10:50",
        day: "19/06/2023",
      },
      endTime: {
        hour: "11:59",
        day: "07/07/2023",
      },
      deadlineTime: {
        hour: "10:00",
        day: "14/07/2023",
      },
    },
    description:
      "Làm sao để tự động đăng nhập ACR system bằng tài khoản sis.hust.edu.vn mà không cần cung cấp tài khoản, mật khẩu",
    footer: {
      priority: "Khẩn cấp",
      status: "Đang thực hiện",
    },
    type: "Personal",
    rating: 0,
  },
  {
    id: 18,
    color: "#2196f3",
    taskName: "Ôn thi giữa kỳ ATTT",
    workspace: "HUST",
    time: {
      startTime: {
        hour: "20:00",
        day: "30/06/2023",
      },
      endTime: {
        hour: "23:55",
        day: "05/07/2023",
      },
      deadlineTime: {
        hour: "14:55",
        day: "06/07/2023",
      },
    },
    description: "Ôn 13 bài từ đầu kỳ đến giờ",
    footer: {
      priority: "Khẩn cấp",
      status: "Chưa thực hiện",
    },
    type: "Personal",
    rating: 0,
  },
  {
    id: 19,
    color: "#2196f3",
    taskName: "Làm slide trình bày paper mới đọc",
    workspace: "HUST",
    time: {
      startTime: {
        hour: "11:00",
        day: "30/06/2023",
      },
      endTime: {
        hour: "23:59",
        day: "04/07/2023",
      },
      deadlineTime: {
        hour: "10:00",
        day: "05/07/2023",
      },
    },
    description:
      "Efficient Determination of Dynamic Split Points in a Decision Tree: ý tưởng thuật toán + argue",
    footer: {
      priority: "Khẩn cấp",
      status: "Chưa thực hiện",
    },
    type: "Personal",
    rating: 0,
  },
  {
    id: 20,
    color: "#2196f3",
    taskName: "Học HPT trên LMS",
    workspace: "HUST",
    time: {
      startTime: {
        hour: "19:59",
        day: "02/06/2023",
      },
      endTime: {
        hour: "23:59",
        day: "09/06/2023",
      },
      deadlineTime: {
        hour: "23:59",
        day: "03/06/2023",
      },
    },
    description:
      "Xem bài giảng + làm quiz + làm bài tập lý thuyết + làm bài tập thực hành",
    footer: {
      priority: "Không khẩn cấp",
      status: "Đã hoàn thành",
    },
    type: "Personal",
    rating: 5,
  },
  {
    id: 21,
    color: "#2196f3",
    taskName: "Lên kế hoạch ôn thi cuối kỳ",
    workspace: "HUST",
    time: {
      startTime: {
        hour: "11:01",
        day: "30/06/2023",
      },
      endTime: {
        hour: "11:02",
        day: "02/07/2023",
      },
      deadlineTime: {
        hour: "11:03",
        day: "02/07/2023",
      },
    },
    description: "Xem lịch thi + note lại\nSắp xếp thời gian ôn thi",
    footer: {
      priority: "Không khẩn cấp",
      status: "Chưa thực hiện",
    },
    type: "Personal",
    rating: 0,
  },
];

const getUpcomingTask = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    upcomingTask = response.data;
  } catch (error) {
    console.error("Error retrieving upcoming tasks:", error);
    throw error;
  }
};

(async () => {
  try {
    await getUpcomingTask();
  } catch (error) {
    // Handle any error that occurred during the execution of getUpcomingTask()
  }
})();

console.log(upcomingTask);

export default upcomingTask;
