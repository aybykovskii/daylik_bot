/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export namespace Auth {
  /**
   * No description
   * @tags auth
   * @name LoginCreate
   * @request POST:/api/auth/login
   */
  export namespace LoginCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      telegramUserId: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      token: string;
    };
  }
}

export namespace Users {
  /**
   * No description
   * @tags users
   * @name Create
   * @request POST:/api/v1/users
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      firstName?: string | null;
      lastName?: string | null;
      /** @pattern ^-?\d*$ */
      telegramUserId: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      eventDrafts: {
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      }[];
      events: {
        copyFromId: number | null;
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      }[];
      firstName?: string | null;
      friends: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      }[];
      fullName: string;
      id: number;
      incomingEventShares: {
        eventId: number;
        /** @format uuid */
        id: string;
        targetUserId: number | null;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      incomingFriendshipRequests: {
        /** @format uuid */
        id: string;
        status: "pending" | "accepted" | "rejected";
        targetUserId: number;
        userId: number;
      }[];
      lastName?: string | null;
      outgoingEventShares: {
        eventId: number;
        /** @format uuid */
        id: string;
        targetUserId: number | null;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      outgoingFriendshipRequests: {
        /** @format uuid */
        id: string;
        status: "pending" | "accepted" | "rejected";
        targetUserId: number;
        userId: number;
      }[];
      payments: {
        amount: number;
        currency: string;
        description: string;
        /** @format uuid */
        id: string;
        /** @format uuid */
        idempotenceKey: string;
        /** @format uuid */
        paymentId: string;
        status: "pending" | "in_progress" | "success" | "failed" | "canceled";
        userId: number;
      }[];
      rewards: {
        description: string;
        id: number;
        name: string;
      }[];
      roles: {
        description: string;
        id: number;
        type: "user" | "staff" | "admin";
      }[];
      settings: {
        id: number;
        notificationTime: string;
        /** @default {} */
        stylization: {
          primaryColor?: string;
        };
        userId: number;
      };
      statistics: {
        activityRating: number;
        id: number;
        sentRequestsCount: number;
        userId: number;
      };
      subscription: {
        endDate: string;
        id: number;
        startDate: string;
        status: "active" | "expired" | "canceled";
        type: "trial" | "paid";
        userId: number;
      };
      /** @pattern ^-?\d*$ */
      telegramUserId: string;
    };
  }

  /**
   * No description
   * @tags users
   * @name Delete
   * @request DELETE:/api/v1/users/{id}
   */
  export namespace Delete {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags users
   * @name Get
   * @request GET:/api/v1/users/{id}
   */
  export namespace Get {
    export type RequestParams = {
      id: string | number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      eventDrafts: {
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      }[];
      events: {
        copyFromId: number | null;
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      }[];
      firstName?: string | null;
      friends: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      }[];
      fullName: string;
      id: number;
      incomingEventShares: {
        eventId: number;
        /** @format uuid */
        id: string;
        targetUserId: number | null;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      incomingFriendshipRequests: {
        /** @format uuid */
        id: string;
        status: "pending" | "accepted" | "rejected";
        targetUserId: number;
        userId: number;
      }[];
      lastName?: string | null;
      outgoingEventShares: {
        eventId: number;
        /** @format uuid */
        id: string;
        targetUserId: number | null;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      outgoingFriendshipRequests: {
        /** @format uuid */
        id: string;
        status: "pending" | "accepted" | "rejected";
        targetUserId: number;
        userId: number;
      }[];
      payments: {
        amount: number;
        currency: string;
        description: string;
        /** @format uuid */
        id: string;
        /** @format uuid */
        idempotenceKey: string;
        /** @format uuid */
        paymentId: string;
        status: "pending" | "in_progress" | "success" | "failed" | "canceled";
        userId: number;
      }[];
      rewards: {
        description: string;
        id: number;
        name: string;
      }[];
      roles: {
        description: string;
        id: number;
        type: "user" | "staff" | "admin";
      }[];
      settings: {
        id: number;
        notificationTime: string;
        /** @default {} */
        stylization: {
          primaryColor?: string;
        };
        userId: number;
      };
      statistics: {
        activityRating: number;
        id: number;
        sentRequestsCount: number;
        userId: number;
      };
      subscription: {
        endDate: string;
        id: number;
        startDate: string;
        status: "active" | "expired" | "canceled";
        type: "trial" | "paid";
        userId: number;
      };
      /** @pattern ^-?\d*$ */
      telegramUserId: string;
    };
  }

  /**
   * No description
   * @tags users
   * @name List
   * @request GET:/api/v1/users
   */
  export namespace List {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      firstName?: string | null;
      id: number;
      lastName?: string | null;
      /** @pattern ^-?\d*$ */
      telegramUserId: string;
    }[];
  }

  /**
   * No description
   * @tags users
   * @name RolesCreate
   * @request POST:/api/v1/users/{id}/roles
   */
  export namespace RolesCreate {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      roleType: "user" | "staff" | "admin";
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      eventDrafts: {
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      }[];
      events: {
        copyFromId: number | null;
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      }[];
      firstName?: string | null;
      friends: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      }[];
      fullName: string;
      id: number;
      incomingEventShares: {
        eventId: number;
        /** @format uuid */
        id: string;
        targetUserId: number | null;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      incomingFriendshipRequests: {
        /** @format uuid */
        id: string;
        status: "pending" | "accepted" | "rejected";
        targetUserId: number;
        userId: number;
      }[];
      lastName?: string | null;
      outgoingEventShares: {
        eventId: number;
        /** @format uuid */
        id: string;
        targetUserId: number | null;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      outgoingFriendshipRequests: {
        /** @format uuid */
        id: string;
        status: "pending" | "accepted" | "rejected";
        targetUserId: number;
        userId: number;
      }[];
      payments: {
        amount: number;
        currency: string;
        description: string;
        /** @format uuid */
        id: string;
        /** @format uuid */
        idempotenceKey: string;
        /** @format uuid */
        paymentId: string;
        status: "pending" | "in_progress" | "success" | "failed" | "canceled";
        userId: number;
      }[];
      rewards: {
        description: string;
        id: number;
        name: string;
      }[];
      roles: {
        description: string;
        id: number;
        type: "user" | "staff" | "admin";
      }[];
      settings: {
        id: number;
        notificationTime: string;
        /** @default {} */
        stylization: {
          primaryColor?: string;
        };
        userId: number;
      };
      statistics: {
        activityRating: number;
        id: number;
        sentRequestsCount: number;
        userId: number;
      };
      subscription: {
        endDate: string;
        id: number;
        startDate: string;
        status: "active" | "expired" | "canceled";
        type: "trial" | "paid";
        userId: number;
      };
      /** @pattern ^-?\d*$ */
      telegramUserId: string;
    };
  }

  /**
   * No description
   * @tags users
   * @name Update
   * @request PATCH:/api/v1/users/{id}
   */
  export namespace Update {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      firstName?: string | null;
      lastName?: string | null;
      /** @pattern ^-?\d*$ */
      telegramUserId: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      eventDrafts: {
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      }[];
      events: {
        copyFromId: number | null;
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      }[];
      firstName?: string | null;
      friends: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      }[];
      fullName: string;
      id: number;
      incomingEventShares: {
        eventId: number;
        /** @format uuid */
        id: string;
        targetUserId: number | null;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      incomingFriendshipRequests: {
        /** @format uuid */
        id: string;
        status: "pending" | "accepted" | "rejected";
        targetUserId: number;
        userId: number;
      }[];
      lastName?: string | null;
      outgoingEventShares: {
        eventId: number;
        /** @format uuid */
        id: string;
        targetUserId: number | null;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      outgoingFriendshipRequests: {
        /** @format uuid */
        id: string;
        status: "pending" | "accepted" | "rejected";
        targetUserId: number;
        userId: number;
      }[];
      payments: {
        amount: number;
        currency: string;
        description: string;
        /** @format uuid */
        id: string;
        /** @format uuid */
        idempotenceKey: string;
        /** @format uuid */
        paymentId: string;
        status: "pending" | "in_progress" | "success" | "failed" | "canceled";
        userId: number;
      }[];
      rewards: {
        description: string;
        id: number;
        name: string;
      }[];
      roles: {
        description: string;
        id: number;
        type: "user" | "staff" | "admin";
      }[];
      settings: {
        id: number;
        notificationTime: string;
        /** @default {} */
        stylization: {
          primaryColor?: string;
        };
        userId: number;
      };
      statistics: {
        activityRating: number;
        id: number;
        sentRequestsCount: number;
        userId: number;
      };
      subscription: {
        endDate: string;
        id: number;
        startDate: string;
        status: "active" | "expired" | "canceled";
        type: "trial" | "paid";
        userId: number;
      };
      /** @pattern ^-?\d*$ */
      telegramUserId: string;
    };
  }
}

export namespace Roles {
  /**
   * No description
   * @tags roles
   * @name Create
   * @request POST:/api/v1/roles
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      description: string;
      type: "user" | "staff" | "admin";
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      description: string;
      type: "user" | "staff" | "admin";
    };
  }

  /**
   * No description
   * @tags roles
   * @name Get
   * @request GET:/api/v1/roles/{type}
   */
  export namespace Get {
    export type RequestParams = {
      type: "user" | "staff" | "admin";
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      description: string;
      type: "user" | "staff" | "admin";
    };
  }

  /**
   * No description
   * @tags roles
   * @name List
   * @request GET:/api/v1/roles
   */
  export namespace List {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      description: string;
      type: "user" | "staff" | "admin";
    }[];
  }
}

export namespace Events {
  /**
   * No description
   * @tags events
   * @name Create
   * @request POST:/api/v1/events
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody =
      | {
          date: string;
          emoji: string;
          text: string;
          time: string | null;
          userId: number;
        }
      | {
          fromDraftId: number;
        };
    export type RequestHeaders = {};
    export type ResponseBody = {
      copies: {
        copyFromId: number | null;
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      }[];
      copyFrom: {
        copyFromId: number | null;
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      };
      copyFromId: number | null;
      date: string;
      emoji: string;
      id: number;
      shares: {
        eventId: number;
        /** @format uuid */
        id: string;
        targetUserId: number | null;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      text: string;
      time: string | null;
      userId: number;
    };
  }

  /**
   * No description
   * @tags events
   * @name Delete
   * @request DELETE:/api/v1/events/{id}
   */
  export namespace Delete {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags events
   * @name Get
   * @request GET:/api/v1/events/{id}
   */
  export namespace Get {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      copies: {
        copyFromId: number | null;
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      }[];
      copyFrom: {
        copyFromId: number | null;
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      };
      copyFromId: number | null;
      date: string;
      emoji: string;
      id: number;
      shares: {
        eventId: number;
        /** @format uuid */
        id: string;
        targetUserId: number | null;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      text: string;
      time: string | null;
      userId: number;
    };
  }

  /**
   * No description
   * @tags events
   * @name List
   * @request GET:/api/v1/events
   */
  export namespace List {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      copyFromId: number | null;
      date: string;
      emoji: string;
      id: number;
      text: string;
      time: string | null;
      userId: number;
    }[];
  }

  /**
   * No description
   * @tags events
   * @name Update
   * @request PATCH:/api/v1/events/{id}
   */
  export namespace Update {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      date?: string;
      emoji?: string;
      text?: string;
      time?: string | null;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      copies: {
        copyFromId: number | null;
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      }[];
      copyFrom: {
        copyFromId: number | null;
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      };
      copyFromId: number | null;
      date: string;
      emoji: string;
      id: number;
      shares: {
        eventId: number;
        /** @format uuid */
        id: string;
        targetUserId: number | null;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      text: string;
      time: string | null;
      userId: number;
    };
  }
}

export namespace EventDrafts {
  /**
   * No description
   * @tags event_drafts
   * @name Create
   * @request POST:/api/v1/event_drafts
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      date: string;
      emoji: string;
      text: string;
      time: string | null;
      userId: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      date: string;
      emoji: string;
      id: number;
      text: string;
      time: string | null;
      userId: number;
    };
  }

  /**
   * No description
   * @tags event_drafts
   * @name Delete
   * @request DELETE:/api/v1/event_drafts/{id}
   */
  export namespace Delete {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags event_drafts
   * @name Get
   * @request GET:/api/v1/event_drafts/{id}
   */
  export namespace Get {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      date: string;
      emoji: string;
      id: number;
      text: string;
      time: string | null;
      userId: number;
    };
  }

  /**
   * No description
   * @tags event_drafts
   * @name List
   * @request GET:/api/v1/event_drafts
   */
  export namespace List {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      date: string;
      emoji: string;
      id: number;
      text: string;
      time: string | null;
      userId: number;
    }[];
  }

  /**
   * No description
   * @tags event_drafts
   * @name Update
   * @request PATCH:/api/v1/event_drafts/{id}
   */
  export namespace Update {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      date?: string;
      emoji?: string;
      text?: string;
      time?: string | null;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      date: string;
      emoji: string;
      id: number;
      text: string;
      time: string | null;
      userId: number;
    };
  }
}

export namespace EventShares {
  /**
   * No description
   * @tags event_shares
   * @name Create
   * @request POST:/api/v1/event_shares
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      eventId: number;
      targetUserId: number | null;
      usageAmount?: number;
      usageLimit?: number;
      userId: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      event: {
        copyFromId: number | null;
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      };
      eventId: number;
      /** @format uuid */
      id: string;
      targetUser: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      targetUserId: number | null;
      usageAmount: number;
      usageLimit: number;
      user: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags event_shares
   * @name Delete
   * @request DELETE:/api/v1/event_shares/{id}
   */
  export namespace Delete {
    export type RequestParams = {
      id: string;
      /** @format uuid */
      uuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags event_shares
   * @name Get
   * @request GET:/api/v1/event_shares/{id}
   */
  export namespace Get {
    export type RequestParams = {
      id: string;
      /** @format uuid */
      uuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      event: {
        copyFromId: number | null;
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      };
      eventId: number;
      /** @format uuid */
      id: string;
      targetUser: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      targetUserId: number | null;
      usageAmount: number;
      usageLimit: number;
      user: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags event_shares
   * @name List
   * @request GET:/api/v1/event_shares
   */
  export namespace List {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      eventId: number;
      /** @format uuid */
      id: string;
      targetUserId: number | null;
      usageAmount: number;
      usageLimit: number;
      userId: number;
    }[];
  }

  /**
   * No description
   * @tags event_shares
   * @name Update
   * @request PATCH:/api/v1/event_shares/{id}
   */
  export namespace Update {
    export type RequestParams = {
      id: string;
      /** @format uuid */
      uuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      targetUserId?: number | null;
      usageAmount?: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      event: {
        copyFromId: number | null;
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        userId: number;
      };
      eventId: number;
      /** @format uuid */
      id: string;
      targetUser: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      targetUserId: number | null;
      usageAmount: number;
      usageLimit: number;
      user: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      userId: number;
    };
  }
}

export namespace Friendships {
  /**
   * No description
   * @tags friendships
   * @name Create
   * @request POST:/api/v1/friendships
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      status?: "pending" | "accepted" | "rejected";
      targetUserId: number;
      userId: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      status: "pending" | "accepted" | "rejected";
      targetUser: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      targetUserId: number;
      user: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags friendships
   * @name Delete
   * @request DELETE:/api/v1/friendships/{uuid}
   */
  export namespace Delete {
    export type RequestParams = {
      /** @format uuid */
      uuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags friendships
   * @name Get
   * @request GET:/api/v1/friendships/{uuid}
   */
  export namespace Get {
    export type RequestParams = {
      /** @format uuid */
      uuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      status: "pending" | "accepted" | "rejected";
      targetUser: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      targetUserId: number;
      user: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags friendships
   * @name Update
   * @request PATCH:/api/v1/friendships/{uuid}
   */
  export namespace Update {
    export type RequestParams = {
      /** @format uuid */
      uuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      status: "pending" | "accepted" | "rejected";
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      status: "pending" | "accepted" | "rejected";
      targetUser: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      targetUserId: number;
      user: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags friendships
   * @name UsersGet
   * @request GET:/api/v1/friendships/users/{id}
   */
  export namespace UsersGet {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      status: "pending" | "accepted" | "rejected";
      targetUser: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      targetUserId: number;
      user: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      userId: number;
    }[];
  }
}

export namespace Payments {
  /**
   * No description
   * @tags payments
   * @name Create
   * @request POST:/api/v1/payments
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      amount: number;
      currency?: string;
      description: string;
      userId: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      amount: number;
      currency: string;
      description: string;
      /** @format uuid */
      idempotenceKey: string;
      /** @format uuid */
      paymentId: string;
      status: "pending" | "in_progress" | "success" | "failed" | "canceled";
      user: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags payments
   * @name Delete
   * @request DELETE:/api/v1/payments/{uuid}
   */
  export namespace Delete {
    export type RequestParams = {
      /** @format uuid */
      uuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags payments
   * @name Get
   * @request GET:/api/v1/payments/{uuid}
   */
  export namespace Get {
    export type RequestParams = {
      /** @format uuid */
      uuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      amount: number;
      currency: string;
      description: string;
      /** @format uuid */
      idempotenceKey: string;
      /** @format uuid */
      paymentId: string;
      status: "pending" | "in_progress" | "success" | "failed" | "canceled";
      user: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags payments
   * @name Update
   * @request PATCH:/api/v1/payments/{uuid}
   */
  export namespace Update {
    export type RequestParams = {
      /** @format uuid */
      uuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      amount?: number;
      currency?: string;
      description?: string;
      status?: "pending" | "in_progress" | "success" | "failed" | "canceled";
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      amount: number;
      currency: string;
      description: string;
      /** @format uuid */
      idempotenceKey: string;
      /** @format uuid */
      paymentId: string;
      status: "pending" | "in_progress" | "success" | "failed" | "canceled";
      user: {
        firstName?: string | null;
        id: number;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags payments
   * @name UsersGet
   * @request GET:/api/v1/payments/users/{id}
   */
  export namespace UsersGet {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      amount: number;
      currency: string;
      description: string;
      /** @format uuid */
      id: string;
      /** @format uuid */
      idempotenceKey: string;
      /** @format uuid */
      paymentId: string;
      status: "pending" | "in_progress" | "success" | "failed" | "canceled";
      userId: number;
    }[];
  }
}

export namespace Health {
  /**
   * No description
   * @name HealthList
   * @request GET:/health
   */
  export namespace HealthList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data.data;
    });
  };
}

/**
 * @title Daylik
 * @version 0.1.0
 *
 * Daylik API documentation
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name LoginCreate
     * @request POST:/api/auth/login
     */
    loginCreate: (
      data: {
        telegramUserId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          token: string;
        },
        any
      >({
        path: `/api/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags users
     * @name Create
     * @request POST:/api/v1/users
     */
    create: (
      data: {
        firstName?: string | null;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          eventDrafts: {
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          }[];
          events: {
            copyFromId: number | null;
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          }[];
          firstName?: string | null;
          friends: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          }[];
          fullName: string;
          id: number;
          incomingEventShares: {
            eventId: number;
            /** @format uuid */
            id: string;
            targetUserId: number | null;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          incomingFriendshipRequests: {
            /** @format uuid */
            id: string;
            status: "pending" | "accepted" | "rejected";
            targetUserId: number;
            userId: number;
          }[];
          lastName?: string | null;
          outgoingEventShares: {
            eventId: number;
            /** @format uuid */
            id: string;
            targetUserId: number | null;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          outgoingFriendshipRequests: {
            /** @format uuid */
            id: string;
            status: "pending" | "accepted" | "rejected";
            targetUserId: number;
            userId: number;
          }[];
          payments: {
            amount: number;
            currency: string;
            description: string;
            /** @format uuid */
            id: string;
            /** @format uuid */
            idempotenceKey: string;
            /** @format uuid */
            paymentId: string;
            status: "pending" | "in_progress" | "success" | "failed" | "canceled";
            userId: number;
          }[];
          rewards: {
            description: string;
            id: number;
            name: string;
          }[];
          roles: {
            description: string;
            id: number;
            type: "user" | "staff" | "admin";
          }[];
          settings: {
            id: number;
            notificationTime: string;
            /** @default {} */
            stylization: {
              primaryColor?: string;
            };
            userId: number;
          };
          statistics: {
            activityRating: number;
            id: number;
            sentRequestsCount: number;
            userId: number;
          };
          subscription: {
            endDate: string;
            id: number;
            startDate: string;
            status: "active" | "expired" | "canceled";
            type: "trial" | "paid";
            userId: number;
          };
          /** @pattern ^-?\d*$ */
          telegramUserId: string;
        },
        any
      >({
        path: `/api/v1/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name Delete
     * @request DELETE:/api/v1/users/{id}
     */
    delete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/users/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name Get
     * @request GET:/api/v1/users/{id}
     */
    get: (id: string | number, params: RequestParams = {}) =>
      this.request<
        {
          eventDrafts: {
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          }[];
          events: {
            copyFromId: number | null;
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          }[];
          firstName?: string | null;
          friends: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          }[];
          fullName: string;
          id: number;
          incomingEventShares: {
            eventId: number;
            /** @format uuid */
            id: string;
            targetUserId: number | null;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          incomingFriendshipRequests: {
            /** @format uuid */
            id: string;
            status: "pending" | "accepted" | "rejected";
            targetUserId: number;
            userId: number;
          }[];
          lastName?: string | null;
          outgoingEventShares: {
            eventId: number;
            /** @format uuid */
            id: string;
            targetUserId: number | null;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          outgoingFriendshipRequests: {
            /** @format uuid */
            id: string;
            status: "pending" | "accepted" | "rejected";
            targetUserId: number;
            userId: number;
          }[];
          payments: {
            amount: number;
            currency: string;
            description: string;
            /** @format uuid */
            id: string;
            /** @format uuid */
            idempotenceKey: string;
            /** @format uuid */
            paymentId: string;
            status: "pending" | "in_progress" | "success" | "failed" | "canceled";
            userId: number;
          }[];
          rewards: {
            description: string;
            id: number;
            name: string;
          }[];
          roles: {
            description: string;
            id: number;
            type: "user" | "staff" | "admin";
          }[];
          settings: {
            id: number;
            notificationTime: string;
            /** @default {} */
            stylization: {
              primaryColor?: string;
            };
            userId: number;
          };
          statistics: {
            activityRating: number;
            id: number;
            sentRequestsCount: number;
            userId: number;
          };
          subscription: {
            endDate: string;
            id: number;
            startDate: string;
            status: "active" | "expired" | "canceled";
            type: "trial" | "paid";
            userId: number;
          };
          /** @pattern ^-?\d*$ */
          telegramUserId: string;
        },
        any
      >({
        path: `/api/v1/users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name List
     * @request GET:/api/v1/users
     */
    list: (params: RequestParams = {}) =>
      this.request<
        {
          firstName?: string | null;
          id: number;
          lastName?: string | null;
          /** @pattern ^-?\d*$ */
          telegramUserId: string;
        }[],
        any
      >({
        path: `/api/v1/users`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name RolesCreate
     * @request POST:/api/v1/users/{id}/roles
     */
    rolesCreate: (
      id: number,
      data: {
        roleType: "user" | "staff" | "admin";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          eventDrafts: {
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          }[];
          events: {
            copyFromId: number | null;
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          }[];
          firstName?: string | null;
          friends: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          }[];
          fullName: string;
          id: number;
          incomingEventShares: {
            eventId: number;
            /** @format uuid */
            id: string;
            targetUserId: number | null;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          incomingFriendshipRequests: {
            /** @format uuid */
            id: string;
            status: "pending" | "accepted" | "rejected";
            targetUserId: number;
            userId: number;
          }[];
          lastName?: string | null;
          outgoingEventShares: {
            eventId: number;
            /** @format uuid */
            id: string;
            targetUserId: number | null;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          outgoingFriendshipRequests: {
            /** @format uuid */
            id: string;
            status: "pending" | "accepted" | "rejected";
            targetUserId: number;
            userId: number;
          }[];
          payments: {
            amount: number;
            currency: string;
            description: string;
            /** @format uuid */
            id: string;
            /** @format uuid */
            idempotenceKey: string;
            /** @format uuid */
            paymentId: string;
            status: "pending" | "in_progress" | "success" | "failed" | "canceled";
            userId: number;
          }[];
          rewards: {
            description: string;
            id: number;
            name: string;
          }[];
          roles: {
            description: string;
            id: number;
            type: "user" | "staff" | "admin";
          }[];
          settings: {
            id: number;
            notificationTime: string;
            /** @default {} */
            stylization: {
              primaryColor?: string;
            };
            userId: number;
          };
          statistics: {
            activityRating: number;
            id: number;
            sentRequestsCount: number;
            userId: number;
          };
          subscription: {
            endDate: string;
            id: number;
            startDate: string;
            status: "active" | "expired" | "canceled";
            type: "trial" | "paid";
            userId: number;
          };
          /** @pattern ^-?\d*$ */
          telegramUserId: string;
        },
        any
      >({
        path: `/api/v1/users/${id}/roles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name Update
     * @request PATCH:/api/v1/users/{id}
     */
    update: (
      id: number,
      data: {
        firstName?: string | null;
        lastName?: string | null;
        /** @pattern ^-?\d*$ */
        telegramUserId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          eventDrafts: {
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          }[];
          events: {
            copyFromId: number | null;
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          }[];
          firstName?: string | null;
          friends: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          }[];
          fullName: string;
          id: number;
          incomingEventShares: {
            eventId: number;
            /** @format uuid */
            id: string;
            targetUserId: number | null;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          incomingFriendshipRequests: {
            /** @format uuid */
            id: string;
            status: "pending" | "accepted" | "rejected";
            targetUserId: number;
            userId: number;
          }[];
          lastName?: string | null;
          outgoingEventShares: {
            eventId: number;
            /** @format uuid */
            id: string;
            targetUserId: number | null;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          outgoingFriendshipRequests: {
            /** @format uuid */
            id: string;
            status: "pending" | "accepted" | "rejected";
            targetUserId: number;
            userId: number;
          }[];
          payments: {
            amount: number;
            currency: string;
            description: string;
            /** @format uuid */
            id: string;
            /** @format uuid */
            idempotenceKey: string;
            /** @format uuid */
            paymentId: string;
            status: "pending" | "in_progress" | "success" | "failed" | "canceled";
            userId: number;
          }[];
          rewards: {
            description: string;
            id: number;
            name: string;
          }[];
          roles: {
            description: string;
            id: number;
            type: "user" | "staff" | "admin";
          }[];
          settings: {
            id: number;
            notificationTime: string;
            /** @default {} */
            stylization: {
              primaryColor?: string;
            };
            userId: number;
          };
          statistics: {
            activityRating: number;
            id: number;
            sentRequestsCount: number;
            userId: number;
          };
          subscription: {
            endDate: string;
            id: number;
            startDate: string;
            status: "active" | "expired" | "canceled";
            type: "trial" | "paid";
            userId: number;
          };
          /** @pattern ^-?\d*$ */
          telegramUserId: string;
        },
        any
      >({
        path: `/api/v1/users/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  roles = {
    /**
     * No description
     *
     * @tags roles
     * @name Create
     * @request POST:/api/v1/roles
     */
    create: (
      data: {
        description: string;
        type: "user" | "staff" | "admin";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          description: string;
          type: "user" | "staff" | "admin";
        },
        any
      >({
        path: `/api/v1/roles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags roles
     * @name Get
     * @request GET:/api/v1/roles/{type}
     */
    get: (type: "user" | "staff" | "admin", params: RequestParams = {}) =>
      this.request<
        {
          description: string;
          type: "user" | "staff" | "admin";
        },
        any
      >({
        path: `/api/v1/roles/${type}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags roles
     * @name List
     * @request GET:/api/v1/roles
     */
    list: (params: RequestParams = {}) =>
      this.request<
        {
          description: string;
          type: "user" | "staff" | "admin";
        }[],
        any
      >({
        path: `/api/v1/roles`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  events = {
    /**
     * No description
     *
     * @tags events
     * @name Create
     * @request POST:/api/v1/events
     */
    create: (
      data:
        | {
            date: string;
            emoji: string;
            text: string;
            time: string | null;
            userId: number;
          }
        | {
            fromDraftId: number;
          },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          copies: {
            copyFromId: number | null;
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          }[];
          copyFrom: {
            copyFromId: number | null;
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          };
          copyFromId: number | null;
          date: string;
          emoji: string;
          id: number;
          shares: {
            eventId: number;
            /** @format uuid */
            id: string;
            targetUserId: number | null;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          text: string;
          time: string | null;
          userId: number;
        },
        any
      >({
        path: `/api/v1/events`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name Delete
     * @request DELETE:/api/v1/events/{id}
     */
    delete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/events/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name Get
     * @request GET:/api/v1/events/{id}
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          copies: {
            copyFromId: number | null;
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          }[];
          copyFrom: {
            copyFromId: number | null;
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          };
          copyFromId: number | null;
          date: string;
          emoji: string;
          id: number;
          shares: {
            eventId: number;
            /** @format uuid */
            id: string;
            targetUserId: number | null;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          text: string;
          time: string | null;
          userId: number;
        },
        any
      >({
        path: `/api/v1/events/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name List
     * @request GET:/api/v1/events
     */
    list: (params: RequestParams = {}) =>
      this.request<
        {
          copyFromId: number | null;
          date: string;
          emoji: string;
          id: number;
          text: string;
          time: string | null;
          userId: number;
        }[],
        any
      >({
        path: `/api/v1/events`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name Update
     * @request PATCH:/api/v1/events/{id}
     */
    update: (
      id: number,
      data: {
        date?: string;
        emoji?: string;
        text?: string;
        time?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          copies: {
            copyFromId: number | null;
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          }[];
          copyFrom: {
            copyFromId: number | null;
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          };
          copyFromId: number | null;
          date: string;
          emoji: string;
          id: number;
          shares: {
            eventId: number;
            /** @format uuid */
            id: string;
            targetUserId: number | null;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          text: string;
          time: string | null;
          userId: number;
        },
        any
      >({
        path: `/api/v1/events/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  eventDrafts = {
    /**
     * No description
     *
     * @tags event_drafts
     * @name Create
     * @request POST:/api/v1/event_drafts
     */
    create: (
      data: {
        date: string;
        emoji: string;
        text: string;
        time: string | null;
        userId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          date: string;
          emoji: string;
          id: number;
          text: string;
          time: string | null;
          userId: number;
        },
        any
      >({
        path: `/api/v1/event_drafts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event_drafts
     * @name Delete
     * @request DELETE:/api/v1/event_drafts/{id}
     */
    delete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/event_drafts/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event_drafts
     * @name Get
     * @request GET:/api/v1/event_drafts/{id}
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          date: string;
          emoji: string;
          id: number;
          text: string;
          time: string | null;
          userId: number;
        },
        any
      >({
        path: `/api/v1/event_drafts/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event_drafts
     * @name List
     * @request GET:/api/v1/event_drafts
     */
    list: (params: RequestParams = {}) =>
      this.request<
        {
          date: string;
          emoji: string;
          id: number;
          text: string;
          time: string | null;
          userId: number;
        }[],
        any
      >({
        path: `/api/v1/event_drafts`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event_drafts
     * @name Update
     * @request PATCH:/api/v1/event_drafts/{id}
     */
    update: (
      id: number,
      data: {
        date?: string;
        emoji?: string;
        text?: string;
        time?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          date: string;
          emoji: string;
          id: number;
          text: string;
          time: string | null;
          userId: number;
        },
        any
      >({
        path: `/api/v1/event_drafts/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  eventShares = {
    /**
     * No description
     *
     * @tags event_shares
     * @name Create
     * @request POST:/api/v1/event_shares
     */
    create: (
      data: {
        eventId: number;
        targetUserId: number | null;
        usageAmount?: number;
        usageLimit?: number;
        userId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          event: {
            copyFromId: number | null;
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          };
          eventId: number;
          /** @format uuid */
          id: string;
          targetUser: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          targetUserId: number | null;
          usageAmount: number;
          usageLimit: number;
          user: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          userId: number;
        },
        any
      >({
        path: `/api/v1/event_shares`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event_shares
     * @name Delete
     * @request DELETE:/api/v1/event_shares/{id}
     */
    delete: (uuid: string, id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/event_shares/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event_shares
     * @name Get
     * @request GET:/api/v1/event_shares/{id}
     */
    get: (uuid: string, id: string, params: RequestParams = {}) =>
      this.request<
        {
          event: {
            copyFromId: number | null;
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          };
          eventId: number;
          /** @format uuid */
          id: string;
          targetUser: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          targetUserId: number | null;
          usageAmount: number;
          usageLimit: number;
          user: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          userId: number;
        },
        any
      >({
        path: `/api/v1/event_shares/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event_shares
     * @name List
     * @request GET:/api/v1/event_shares
     */
    list: (params: RequestParams = {}) =>
      this.request<
        {
          eventId: number;
          /** @format uuid */
          id: string;
          targetUserId: number | null;
          usageAmount: number;
          usageLimit: number;
          userId: number;
        }[],
        any
      >({
        path: `/api/v1/event_shares`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event_shares
     * @name Update
     * @request PATCH:/api/v1/event_shares/{id}
     */
    update: (
      uuid: string,
      id: string,
      data: {
        targetUserId?: number | null;
        usageAmount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          event: {
            copyFromId: number | null;
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            userId: number;
          };
          eventId: number;
          /** @format uuid */
          id: string;
          targetUser: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          targetUserId: number | null;
          usageAmount: number;
          usageLimit: number;
          user: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          userId: number;
        },
        any
      >({
        path: `/api/v1/event_shares/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  friendships = {
    /**
     * No description
     *
     * @tags friendships
     * @name Create
     * @request POST:/api/v1/friendships
     */
    create: (
      data: {
        status?: "pending" | "accepted" | "rejected";
        targetUserId: number;
        userId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          status: "pending" | "accepted" | "rejected";
          targetUser: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          targetUserId: number;
          user: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          userId: number;
        },
        any
      >({
        path: `/api/v1/friendships`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags friendships
     * @name Delete
     * @request DELETE:/api/v1/friendships/{uuid}
     */
    delete: (uuid: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/friendships/${uuid}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags friendships
     * @name Get
     * @request GET:/api/v1/friendships/{uuid}
     */
    get: (uuid: string, params: RequestParams = {}) =>
      this.request<
        {
          status: "pending" | "accepted" | "rejected";
          targetUser: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          targetUserId: number;
          user: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          userId: number;
        },
        any
      >({
        path: `/api/v1/friendships/${uuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags friendships
     * @name Update
     * @request PATCH:/api/v1/friendships/{uuid}
     */
    update: (
      uuid: string,
      data: {
        status: "pending" | "accepted" | "rejected";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          status: "pending" | "accepted" | "rejected";
          targetUser: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          targetUserId: number;
          user: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          userId: number;
        },
        any
      >({
        path: `/api/v1/friendships/${uuid}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags friendships
     * @name UsersGet
     * @request GET:/api/v1/friendships/users/{id}
     */
    usersGet: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          status: "pending" | "accepted" | "rejected";
          targetUser: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          targetUserId: number;
          user: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          userId: number;
        }[],
        any
      >({
        path: `/api/v1/friendships/users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  payments = {
    /**
     * No description
     *
     * @tags payments
     * @name Create
     * @request POST:/api/v1/payments
     */
    create: (
      data: {
        amount: number;
        currency?: string;
        description: string;
        userId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          amount: number;
          currency: string;
          description: string;
          /** @format uuid */
          idempotenceKey: string;
          /** @format uuid */
          paymentId: string;
          status: "pending" | "in_progress" | "success" | "failed" | "canceled";
          user: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          userId: number;
        },
        any
      >({
        path: `/api/v1/payments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payments
     * @name Delete
     * @request DELETE:/api/v1/payments/{uuid}
     */
    delete: (uuid: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/payments/${uuid}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payments
     * @name Get
     * @request GET:/api/v1/payments/{uuid}
     */
    get: (uuid: string, params: RequestParams = {}) =>
      this.request<
        {
          amount: number;
          currency: string;
          description: string;
          /** @format uuid */
          idempotenceKey: string;
          /** @format uuid */
          paymentId: string;
          status: "pending" | "in_progress" | "success" | "failed" | "canceled";
          user: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          userId: number;
        },
        any
      >({
        path: `/api/v1/payments/${uuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payments
     * @name Update
     * @request PATCH:/api/v1/payments/{uuid}
     */
    update: (
      uuid: string,
      data: {
        amount?: number;
        currency?: string;
        description?: string;
        status?: "pending" | "in_progress" | "success" | "failed" | "canceled";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          amount: number;
          currency: string;
          description: string;
          /** @format uuid */
          idempotenceKey: string;
          /** @format uuid */
          paymentId: string;
          status: "pending" | "in_progress" | "success" | "failed" | "canceled";
          user: {
            firstName?: string | null;
            id: number;
            lastName?: string | null;
            /** @pattern ^-?\d*$ */
            telegramUserId: string;
          };
          userId: number;
        },
        any
      >({
        path: `/api/v1/payments/${uuid}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payments
     * @name UsersGet
     * @request GET:/api/v1/payments/users/{id}
     */
    usersGet: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          amount: number;
          currency: string;
          description: string;
          /** @format uuid */
          id: string;
          /** @format uuid */
          idempotenceKey: string;
          /** @format uuid */
          paymentId: string;
          status: "pending" | "in_progress" | "success" | "failed" | "canceled";
          userId: number;
        }[],
        any
      >({
        path: `/api/v1/payments/users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  health = {
    /**
     * No description
     *
     * @name HealthList
     * @request GET:/health
     */
    healthList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/health`,
        method: "GET",
        ...params,
      }),
  };
}
