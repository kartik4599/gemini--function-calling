import { SchemaType } from "@google/generative-ai";

export const function_declaration = {
  apply_for_leave: {
    name: "apply_for_leave",
    description:
      "Apply for leave with specified start and end dates and type of leave",
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
        reason: {
          type: SchemaType.STRING,
          description: "Reason for applying for leave",
        },
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
        "reason",
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
      "Apply for Work From Home (WFH) for specified start and end dates",
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
      leaves: [
        { type: "Paid Leave", days: 10 },
        { type: "Un-paid Leave", days: 10 },
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
};
