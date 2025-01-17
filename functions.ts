import { Router } from "express";

const router = Router();

router.post("/apply_for_leave", (req, res) => {
  console.log({ body: req.body, path: "/apply_for_leave" });
  res.json({
    status: true,
    message: "Leave application submitted successfully!",
  });
});

router.post("/see_leave_balance", (req, res) => {
  console.log({ body: req.body, path: "/see_leave_balance" });
  res.json({
    status: true,
    balance: [
      {
        balance: 0,
        employee_id: 405,
        leaveType: {
          id: 3,
          leave_type: "MARRL",
          title: "Marriage Leave",
          description:
            "This leave is allocated to employees for their own marriage.",
          status: true,
          createdAt: "2022-11-04T10:54:04.000Z",
          updatedAt: "2023-04-03T07:42:17.000Z",
        },
        leave_type_id: 3,
      },
      {
        balance: 0,
        employee_id: 405,
        id: 1309,
        leaveType: {
          id: 1,
          leave_type: "PL",
          title: "Privilege Leave",
          description: "This is the paid leave.",
          status: true,
          createdAt: "2022-11-04T10:53:42.000Z",
          updatedAt: "2023-12-29T04:42:31.000Z",
        },
        leave_type_id: 1,
      },
      {
        balance: 0,
        employee_id: 405,
        leaveType: {
          id: 5,
          leave_type: "PTL",
          title: "Paternity Leave",
          description:
            "Whenever any of our male employee is blessed with a new born in the family he will get 5 leaves to use as a paternity leave.",
          status: true,
          createdAt: "2023-06-30T11:25:52.000Z",
          updatedAt: "2023-06-30T11:25:52.000Z",
        },
        leave_type_id: 5,
      },
      {
        balance: 0,
        employee_id: 405,
        leaveType: {
          id: 4,
          leave_type: "BL",
          title: "Bereavement Leave",
          description:
            "In case of a death of any immediate family member occurs then employee will get 5 leaves where he/she can use support the family in that difficult time.\t",
          status: true,
          createdAt: "2023-06-30T11:25:34.000Z",
          updatedAt: "2023-06-30T11:25:34.000Z",
        },
        leave_type_id: 4,
      },
    ],
  });
});

router.post("/apply_for_wfh", (req, res) => {
  console.log({ body: req.body, path: "/apply_for_wfh" });
  res.json({
    status: true,
    message: "WFH application submitted successfully!",
  });
});

router.post("/request_it_support", (req, res) => {
  console.log({ body: req.body, path: "/request_it_support" });
  res.json({
    status: true,
    message: "IT support Ticket has been created successfully!",
  });
});

router.post("/book_meeting_room", (req, res) => {
  console.log({ body: req.body, path: "/book_meeting_room" });
  res.json({
    status: true,
    message: "Meeting room booked successfully!",
  });
});

router.post("/see_attendance_log", (req, res) => {
  console.log({ body: req.body, path: "/see_attendance_log" });
  res.json({
    status: true,
    attendanceLog: [
      {
        date: "2025-01-14",
        is_holiday: true,
        gross_hrs: "",
        effective_hrs: "",
        first_Entry_log: "",
        last_entry_log: "",
        status_for_day: "",
        sixThFloor: [],
        eightThFloor: [],
        elevenThFloor: [],
        rangeArray: [],
        date_entries: [],
        is_holiday_type: "holiday",
        holiday_name: "Makar Sankranti",
        isRegularization: false,
      },
      {
        rangeArray: [
          {
            type: "reg",
            in: "2025-01-13T09:43:35.000Z",
            out: "2025-01-13T09:52:55.000Z",
          },
          {
            type: "break",
            in: "2025-01-13T09:52:55.000Z",
            out: "2025-01-13T10:04:06.000Z",
          },
          {
            type: "reg",
            in: "2025-01-13T10:04:06.000Z",
            out: "2025-01-13T16:05:52.000Z",
          },
          {
            type: "break",
            in: "2025-01-13T16:05:52.000Z",
            out: "2025-01-13T16:14:53.000Z",
          },
          {
            type: "reg",
            in: "2025-01-13T16:14:53.000Z",
            out: "2025-01-13T18:34:26.000Z",
          },
        ],
        gross_hrs: "08:50:00",
        grossHrsCal: 8.5,
        effective_hrs: "08:30:39",
        break_hrs: "00:20:12",
        first_Entry_log: "2025-01-13T09:43:35.000Z",
        last_entry_log: "2025-01-13T18:34:26.000Z",
        status_for_day: true,
        effectiveHrsForCal: 8.3,
        date: "2025-01-13",
        date_entries: [
          {
            id: 951196,
            employee_code: "MI-585",
            employee_id: 405,
            event_date_time: "2025-01-13T09:43:35.000Z",
            event_type: 0,
            device_id: 1,
            device_name: "ARGO FACE-Device-801",
            user_id: "MI585",
            lat: null,
            long: null,
            location_name: null,
            createdAt: "2025-01-13T09:45:05.000Z",
            updatedAt: "2025-01-13T09:45:05.000Z",
          },
          {
            id: 951242,
            employee_code: "MI-585",
            employee_id: 405,
            event_date_time: "2025-01-13T09:52:55.000Z",
            event_type: 1,
            device_id: 1,
            device_name: "ARGO FACE-Device-801",
            user_id: "MI585",
            lat: null,
            long: null,
            location_name: null,
            createdAt: "2025-01-13T10:00:05.000Z",
            updatedAt: "2025-01-13T10:00:05.000Z",
          },
          {
            id: 951329,
            employee_code: "MI-585",
            employee_id: 405,
            event_date_time: "2025-01-13T10:04:06.000Z",
            event_type: 0,
            device_id: 1,
            device_name: "ARGO FACE-Device-801",
            user_id: "MI585",
            lat: null,
            long: null,
            location_name: null,
            createdAt: "2025-01-13T10:15:05.000Z",
            updatedAt: "2025-01-13T10:15:05.000Z",
          },
          {
            id: 951932,
            employee_code: "MI-585",
            employee_id: 405,
            event_date_time: "2025-01-13T16:05:52.000Z",
            event_type: 1,
            device_id: 1,
            device_name: "ARGO FACE-Device-801",
            user_id: "MI585",
            lat: null,
            long: null,
            location_name: null,
            createdAt: "2025-01-13T16:15:04.000Z",
            updatedAt: "2025-01-13T16:15:04.000Z",
          },
          {
            id: 951887,
            employee_code: "MI-585",
            employee_id: 405,
            event_date_time: "2025-01-13T16:14:53.000Z",
            event_type: 0,
            device_id: 1,
            device_name: "ARGO FACE-Device-801",
            user_id: "MI585",
            lat: null,
            long: null,
            location_name: null,
            createdAt: "2025-01-13T16:15:04.000Z",
            updatedAt: "2025-01-13T16:15:04.000Z",
          },
          {
            id: 952186,
            employee_code: "MI-585",
            employee_id: 405,
            event_date_time: "2025-01-13T18:34:26.000Z",
            event_type: 1,
            device_id: 1,
            device_name: "ARGO FACE-Device-801",
            user_id: "MI585",
            lat: null,
            long: null,
            location_name: null,
            createdAt: "2025-01-13T18:45:03.000Z",
            updatedAt: "2025-01-13T18:45:03.000Z",
          },
        ],
        eightThFloor: [
          {
            id: 951196,
            employee_code: "MI-585",
            employee_id: 405,
            event_date_time: "2025-01-13T09:43:35.000Z",
            event_type: 0,
            device_id: 1,
            device_name: "ARGO FACE-Device-801",
            user_id: "MI585",
            lat: null,
            long: null,
            location_name: null,
            createdAt: "2025-01-13T09:45:05.000Z",
            updatedAt: "2025-01-13T09:45:05.000Z",
          },
          {
            id: 951242,
            employee_code: "MI-585",
            employee_id: 405,
            event_date_time: "2025-01-13T09:52:55.000Z",
            event_type: 1,
            device_id: 1,
            device_name: "ARGO FACE-Device-801",
            user_id: "MI585",
            lat: null,
            long: null,
            location_name: null,
            createdAt: "2025-01-13T10:00:05.000Z",
            updatedAt: "2025-01-13T10:00:05.000Z",
          },
          {
            id: 951329,
            employee_code: "MI-585",
            employee_id: 405,
            event_date_time: "2025-01-13T10:04:06.000Z",
            event_type: 0,
            device_id: 1,
            device_name: "ARGO FACE-Device-801",
            user_id: "MI585",
            lat: null,
            long: null,
            location_name: null,
            createdAt: "2025-01-13T10:15:05.000Z",
            updatedAt: "2025-01-13T10:15:05.000Z",
          },
          {
            id: 951932,
            employee_code: "MI-585",
            employee_id: 405,
            event_date_time: "2025-01-13T16:05:52.000Z",
            event_type: 1,
            device_id: 1,
            device_name: "ARGO FACE-Device-801",
            user_id: "MI585",
            lat: null,
            long: null,
            location_name: null,
            createdAt: "2025-01-13T16:15:04.000Z",
            updatedAt: "2025-01-13T16:15:04.000Z",
          },
          {
            id: 951887,
            employee_code: "MI-585",
            employee_id: 405,
            event_date_time: "2025-01-13T16:14:53.000Z",
            event_type: 0,
            device_id: 1,
            device_name: "ARGO FACE-Device-801",
            user_id: "MI585",
            lat: null,
            long: null,
            location_name: null,
            createdAt: "2025-01-13T16:15:04.000Z",
            updatedAt: "2025-01-13T16:15:04.000Z",
          },
          {
            id: 952186,
            employee_code: "MI-585",
            employee_id: 405,
            event_date_time: "2025-01-13T18:34:26.000Z",
            event_type: 1,
            device_id: 1,
            device_name: "ARGO FACE-Device-801",
            user_id: "MI585",
            lat: null,
            long: null,
            location_name: null,
            createdAt: "2025-01-13T18:45:03.000Z",
            updatedAt: "2025-01-13T18:45:03.000Z",
          },
        ],
        sixThFloor: [],
        elevenThFloor: [],
        wfh: [],
        lat: null,
        long: null,
        location_name: null,
        is_holiday: false,
        is_holiday_type: "",
        isRegularization: false,
        regularizationRequest: null,
      },
      {
        date: "2025-01-12",
        is_holiday: true,
        gross_hrs: "",
        effective_hrs: "",
        first_Entry_log: "",
        last_entry_log: "",
        status_for_day: "",
        sixThFloor: [],
        eightThFloor: [],
        elevenThFloor: [],
        rangeArray: [],
        date_entries: [],
        is_holiday_type: "weekly_off",
        isRegularization: false,
      },
    ],
  });
});

router.post("/see_latest_notification", (req, res) => {
  console.log({ body: req.body, path: "/see_latest_notification" });
  res.json({
    status: true,
    notifications: [
      {
        id: 212260,
        sender_id: 37,
        receiver_id: 405,
        notification_id: 122446,
        read_status: true,
        createdAt: "2024-12-30T04:59:51.000Z",
        updatedAt: "2024-12-30T05:08:51.000Z",
        notification: {
          message: "AR request for Dec 09 2024, Monday is approved.",
          type: "ar_req_approved_noti",
          redirect_url:
            "https://rms.mindinventory.net/attendance-logs?tab=my-attendance",
          notification_category_id: 1,
        },
        Sender: {
          first_name: "Karan",
          last_name: "Pandya",
        },
      },
    ],
  });
});

router.post("/see_lunch_menu", (req, res) => {
  console.log({ body: req.body, path: "/see_lunch_menu" });
  res.json({
    menu: '<p>Refill your plate again if you want but please do not waste food 🙏🏻😇</p><p><strong><u>WEEKLY FOOD MENU</u></strong></p><ul><li><strong>Monday</strong></li></ul><ol type="1"><li>Rajma Chawal</li><li>Aloo Gobi</li><li>Paneer Butter Masala</li><li>Gulab Jamun</li></ol><ul><li><strong>Tuesday</strong></li></ul><ol type="1"><li>Chole Bhature</li><li>Jeera Rice</li><li>Mix Vegetable Curry</li><li>Rasgulla</li></ol><ul><li><strong>Wednesday</strong></li></ul><ol type="1"><li>Dal Tadka</li><li>Paneer Tikka Masala</li><li>Veg Pulao</li><li>Jalebi</li></ol><ul><li><strong>Thursday</strong></li></ul><ol type="1"><li>Sambar Rice</li><li>Masala Dosa</li><li>Idli with Coconut Chutney</li><li>Medu Vada</li><li>Payasam</li></ol><ul><li><strong>Friday</strong></li></ul><ol type="1"><li>Butter Chicken (or Paneer Butter Masala for vegetarians)</li><li>Naan</li><li>Dal Makhani</li><li>Ice Cream</li></ol>',
    updatedAt: "2025-01-10T11:30:01.000Z",
  });
});

router.post("/meal_planning", (req, res) => {
  console.log({ body: req.body, path: "/meal_planning" });
  res.json({
    status: true,
    message: "Meal plan updated successfully!",
  });
});

export default router;
