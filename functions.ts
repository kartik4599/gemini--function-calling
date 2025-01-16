import { SchemaType } from "@google/generative-ai";

export const function_declaration = {
  apply_for_leave: {
    name: "apply_for_leave",
    description:
      "Apply for leave with specified start date and half, end date and half, leave type. If only one Date is provider pass it as startDate and endDate",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        startDate: {
          type: SchemaType.STRING,
          description: "The start date of the leave in YYYY-MM-DD format",
        },
        startHalf: {
          type: SchemaType.STRING,
          description:
            "From which half leave start from, strict input are 'First Half' or 'Second Half'.",
        },
        endDate: {
          type: SchemaType.STRING,
          description: "The end date of the leave in YYYY-MM-DD format",
        },
        endHalf: {
          type: SchemaType.STRING,
          description:
            "From which half leave end at, strict input are 'First Half' or 'Second Half'.",
        },
        leaveType: {
          type: SchemaType.STRING,
          description:
            "Type of leave being applied. strict input are PL(Privilege Leave), LWP(Leave Without Pay), MARRL(Marriage Leave), BL(Bereavement Leave), PTL(Paternity Leave)",
        },
        // reason: {
        //   type: SchemaType.STRING,
        //   description: "Reason for applying for leave",
        // },
        confirmation: {
          type: SchemaType.BOOLEAN,
          description:
            "After receiving startDate, startHalf, endDate, endHalf, reason and leaveType for leave show the leave detail to user and ask for confirmation.",
        },
      },
      required: [
        "startDate",
        "startHalf",
        "endDate",
        "endHalf",
        "leaveType",
        // "reason",
        "confirmation",
      ],
    },
  },
  see_leave_balance: {
    name: "see_leave_balance",
    description: "Check the leave balance available to the user",
  },
  apply_for_wfh: {
    name: "apply_for_wfh",
    description:
      "Apply for Work From Home (WFH) for specified start and end dates. If only one Date is provider pass it as startDate and endDate",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        startDate: {
          type: SchemaType.STRING,
          description: "The start date of WFH in YYYY-MM-DD format",
        },
        endDate: {
          type: SchemaType.STRING,
          description: "The end date of WFH in YYYY-MM-DD format",
        },
        confirmation: {
          type: SchemaType.BOOLEAN,
          description:
            "After receiving startDate and endDate for WFH show the WFH detail to user and ask for confirmation ",
        },
      },
    },
  },
  request_it_support: {
    name: "request_it_support",
    description:
      "Request IT support by specifying the issue that needs assistance",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        issue: {
          type: SchemaType.STRING,
          description: "Description of the IT issue that requires support",
        },
      },
    },
  },
  book_meeting_room: {
    name: "book_meeting_room",
    description: "Book a meeting room for a specified time slot",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        roomNumber: {
          type: SchemaType.STRING,
          description: "The meeting room number to be booked",
        },
        fromTime: {
          type: SchemaType.STRING,
          description:
            "The start time for the booking in HH:MM format (24-hour clock)",
        },
        toTime: {
          type: SchemaType.STRING,
          description:
            "The end time for the booking in HH:MM format (24-hour clock)",
        },
      },
    },
  },
  see_attendance_log: {
    name: "see_attendance_log",
    description:
      "View the attendance log for a specified date range which includes data like working hours, gross hours, break hours absent, is holiday and holiday type. If only one Date is provider pass it as startDate and endDate",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        startDate: {
          type: SchemaType.STRING,
          description:
            "The start date for the attendance log in YYYY-MM-DD format",
        },
        endDate: {
          type: SchemaType.STRING,
          description:
            "The end date for the attendance log in YYYY-MM-DD format",
        },
      },
      required: ["startDate", "endDate"],
    },
  },
  see_latest_notification: {
    name: "see_latest_notification",
    description: "View the most recent notifications",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        count: {
          type: SchemaType.NUMBER,
          description:
            "The number of latest notifications to fetch. If not provided, pass 10 as default.",
        },
      },
    },
  },
  see_lunch_menu: {
    name: "see_lunch_menu",
    description: "View the lunch menu for a week",
  },
  meal_planning: {
    name: "meal_planning",
    description:
      "Plan meals by specifying dates and their application statuses (apply or remove application)",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        dates: {
          type: SchemaType.ARRAY,
          description:
            "An array of objects containing a date and status. The date should be in YYYY-MM-DD format, and the status should be 1 (apply) or 0 (remove application).",
          items: {
            type: SchemaType.OBJECT,
            properties: {
              date: {
                type: SchemaType.STRING,
                description: "The date for meal planning in YYYY-MM-DD format",
              },
              status: {
                type: SchemaType.NUMBER,
                description:
                  "The application status: 1 for applying, 0 for removing application",
              },
            },
            required: ["date", "status"],
          },
        },
      },
      required: ["dates"],
    },
  },
};

export const function_method = {
  apply_for_leave: (params: any) => {
    // Add your leave application logic here
    console.log({ params, apply_for_leave: true });
    return {
      status: true,
      message: "Leave application submitted successfully!",
    };
  },
  see_leave_balance: (params: any) => {
    // Add your leave balance check logic here
    console.log({ params, see_leave_balance: true });

    return {
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
    };
  },
  apply_for_wfh: (params: any) => {
    // Add your WFH application logic here
    console.log({ params, apply_for_wfh: true });

    return {
      status: true,
      message: "WFH application submitted successfully!",
    };
  },
  request_it_support: (params: any) => {
    // Add your IT support request logic here
    console.log({ params, request_it_support: true });

    return {
      status: true,
      message: "IT support Ticket has been created successfully!",
    };
  },
  book_meeting_room: (params: any) => {
    // Add your meeting room booking logic here
    console.log({ params, book_meeting_room: true });

    return {
      status: true,
      message: "Meeting room booked successfully!",
    };
  },
  see_attendance_log: (params: any) => {
    // Add your attendance log retrieval logic here
    console.log({ params, see_attendance_log: true });

    return {
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
    };
  },
  see_latest_notification: (params: any) => {
    // Add your notification retrieval logic here
    console.log({ params, see_latest_notification: true });
    return {
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
    };
  },
  see_lunch_menu: (params: any) => {
    // Add your lunch menu retrieval logic here
    console.log({ params, see_lunch_menu: true });
    return {
      menu: '<p>Refill your plate again if you want but please do not waste food 🙏🏻😇</p><p><strong><u>WEEKLY FOOD MENU</u></strong></p><ul><li><strong>Monday</strong></li></ul><ol type="1"><li>Rajma Chawal</li><li>Aloo Gobi</li><li>Paneer Butter Masala</li><li>Gulab Jamun</li></ol><ul><li><strong>Tuesday</strong></li></ul><ol type="1"><li>Chole Bhature</li><li>Jeera Rice</li><li>Mix Vegetable Curry</li><li>Rasgulla</li></ol><ul><li><strong>Wednesday</strong></li></ul><ol type="1"><li>Dal Tadka</li><li>Paneer Tikka Masala</li><li>Veg Pulao</li><li>Jalebi</li></ol><ul><li><strong>Thursday</strong></li></ul><ol type="1"><li>Sambar Rice</li><li>Masala Dosa</li><li>Idli with Coconut Chutney</li><li>Medu Vada</li><li>Payasam</li></ol><ul><li><strong>Friday</strong></li></ul><ol type="1"><li>Butter Chicken (or Paneer Butter Masala for vegetarians)</li><li>Naan</li><li>Dal Makhani</li><li>Ice Cream</li></ol>',
      updatedAt: "2025-01-10T11:30:01.000Z",
    };
  },
  meal_planning: (params: any) => {
    // Add your meal planning logic here
    console.log({ params: JSON.stringify(params), meal_planning: true });
    return {
      status: true,
      message: "Meal plan updated successfully!",
    };
  },
};
