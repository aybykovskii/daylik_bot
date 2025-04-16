/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type DeleteEventDraftsByIdError =
  | {
      error: "ERR_VALIDATION_FAILED";
    }
  | {
      error: "ERR_EVENT_DRAFT_DOES_NOT_EXIST";
    };

export type DeleteEventSharesByUuidError = {
  error: "ERR_EVENT_SHARING_DOES_NOT_EXIST";
};

export type DeleteEventsByIdError = {
  error: "ERR_EVENT_DOES_NOT_EXIST" | "ERR_VALIDATION_FAILED";
};

export type DeleteFriendshipByUuidError = {
  error: "ERR_FRIENDSHIP_REQUEST_DOES_NOT_EXIST" | "ERR_VALIDATION_FAILED";
};

export type DeletePaymentsByUuidError = {
  error: "ERR_PAYMENT_DOES_NOT_EXIST" | "ERR_VALIDATION_FAILED";
};

export type DeleteUsersByIdError =
  | {
      error: "ERR_USER_DOES_NOT_EXIST" | "ERR_VALIDATION_FAILED";
    }
  | {
      error: "ERR_INVALID_USER_ID";
    };

export type GetApiAuthTokenError = {
  error: "ERR_USER_DOES_NOT_EXIST";
};

export type GetEventDraftsByIdError =
  | {
      error: "ERR_INVALID_USER_ID" | "ERR_VALIDATION_FAILED";
    }
  | {
      error: "ERR_EVENT_DRAFT_DOES_NOT_EXIST";
    };

export type GetEventSharesByUuidError =
  | {
      error: "ERR_EVENT_SHARING_DOES_NOT_EXIST";
    }
  | {
      error: "ERR_INVALID_USER_ID";
    };

export type GetEventSharesError = {
  error: "ERR_INVALID_USER_ROLE";
};

export type GetEventsByIdError =
  | {
      error: "ERR_EVENT_DOES_NOT_EXIST";
    }
  | {
      error: "ERR_INVALID_USER_ID";
    };

export type GetEventsError = {
  error: "ERR_INVALID_USER_ROLE";
};

export type GetFriendshipByUuidError = {
  error: "ERR_FRIENDSHIP_REQUEST_DOES_NOT_EXIST" | "ERR_VALIDATION_FAILED";
};

export type GetFriendshipError =
  | {
      error: "ERR_VALIDATION_FAILED";
    }
  | {
      error: "ERR_INVALID_USER_ROLE";
    };

export type GetPaymentsByUuidError = {
  error: "ERR_PAYMENT_DOES_NOT_EXIST" | "ERR_VALIDATION_FAILED";
};

export type GetPaymentsError =
  | {
      error: "ERR_VALIDATION_FAILED";
    }
  | {
      error: "ERR_INVALID_USER_ROLE";
    };

export type GetSettingsByIdError = {
  error: "ERR_SETTINGS_DOES_NOT_EXIST" | "ERR_VALIDATION_FAILED";
};

export type GetSettingsError =
  | {
      error: "ERR_VALIDATION_FAILED";
    }
  | {
      error: "ERR_INVALID_USER_ROLE";
    };

export type GetSubscriptionsByIdCheckError =
  | {
      error:
        | "ERR_PAID_SUBSCRIPTION_EXPIRED"
        | "ERR_TRIAL_SUBSCRIPTION_EXPIRED"
        | "ERR_VALIDATION_FAILED";
    }
  | {
      error: "ERR_SUBSCRIPTION_DOES_NOT_EXIST";
    };

export type GetUsersByIdError =
  | {
      error: "ERR_USER_DOES_NOT_EXIST" | "ERR_VALIDATION_FAILED";
    }
  | {
      error: "ERR_INVALID_USER_ID";
    };

export type GetUsersError = {
  error: "ERR_INVALID_USER_ROLE";
};

export type PatchEventDraftsByIdError =
  | {
      error: "ERR_VALIDATION_FAILED";
    }
  | {
      error: "ERR_EVENT_DRAFT_DOES_NOT_EXIST";
    };

export type PatchEventSharesByUuidError =
  | {
      error:
        | "ERR_EVENT_SHARING_DOES_NOT_EXIST"
        | "ERR_EVENT_SHARING_INVALID_DATA";
    }
  | {
      error: "ERR_INVALID_USER_ID" | "ERR_VALIDATION_FAILED";
    };

export type PatchEventsByIdError =
  | {
      error: "ERR_EVENT_DOES_NOT_EXIST" | "ERR_VALIDATION_FAILED";
    }
  | {
      error: "ERR_INVALID_USER_ID";
    };

export type PatchFriendshipByUuidError = {
  error:
    | "ERR_FRIENDSHIP_REQUEST_DOES_NOT_EXIST"
    | "ERR_FRIENDSHIP_REQUEST_NOT_PENDING"
    | "ERR_FRIENDSHIP_REQUEST_USER_DOES_NOT_EXIST"
    | "ERR_VALIDATION_FAILED";
};

export type PatchPaymentsByUuidError = {
  error: "ERR_PAYMENT_DOES_NOT_EXIST" | "ERR_VALIDATION_FAILED";
};

export type PatchSettingsByIdError = {
  error: "ERR_SETTINGS_DOES_NOT_EXIST" | "ERR_VALIDATION_FAILED";
};

export type PatchUsersByIdError =
  | {
      error:
        | "ERR_USER_DOES_NOT_EXIST"
        | "ERR_USER_UPDATE_FAILED"
        | "ERR_VALIDATION_FAILED";
    }
  | {
      error: "ERR_INVALID_USER_ID";
    };

export type PatchUsersByIdIncreaseRequestsCountError =
  | {
      error: "ERR_USER_DOES_NOT_EXIST" | "ERR_VALIDATION_FAILED";
    }
  | {
      error: "ERR_INVALID_USER_ID";
    };

export type PostEventDraftsError =
  | {
      error: "ERR_VALIDATION_FAILED";
    }
  | {
      error: "ERR_EVENT_DRAFT_DOES_NOT_EXIST";
    };

export type PostEventSharesError =
  | {
      error: "ERR_EVENT_SHARING_INVALID_DATA";
    }
  | {
      error: "ERR_INVALID_USER_ID" | "ERR_VALIDATION_FAILED";
    };

export type PostEventsError =
  | {
      error: "ERR_EVENT_DRAFT_DOES_NOT_EXIST" | "ERR_EVENT_INVALID_DATA";
    }
  | {
      error: "ERR_VALIDATION_FAILED";
    };

export type PostFriendshipError = {
  error: "ERR_FRIENDSHIP_REQUEST_ALREADY_EXISTS" | "ERR_VALIDATION_FAILED";
};

export type PostPaymentsError = {
  error: "ERR_VALIDATION_FAILED";
};

export type PostUsersError = {
  error: "ERR_USER_ALREADY_EXISTS" | "ERR_VALIDATION_FAILED";
};

export namespace Auth {
  /**
   * No description
   * @tags auth
   * @name GetApiToken
   * @summary Create a token for a user
   * @request GET:/api/auth/token
   */
  export namespace GetApiToken {
    export type RequestParams = {};
    export type RequestQuery = {
      telegramUserId?: string;
      /** @pattern ^(?:(?!^-0$)-?(?:(?:0|[1-9]\d*)))$ */
      userId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      token: string;
    };
  }
}

export namespace Settings {
  /**
   * No description
   * @tags settings
   * @name GetAll
   * @summary Get list of all settings
   * @request GET:/api/v1/settings
   */
  export namespace GetAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      UTCTimeDiff: number;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      id: number;
      notificationTime: string;
      stylization: {
        primaryColor?: string;
        secondaryColor?: string;
      };
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      userId: number;
    }[];
  }

  /**
   * No description
   * @tags settings
   * @name GetById
   * @summary Get a setting by id
   * @request GET:/api/v1/settings/{id}
   */
  export namespace GetById {
    export type RequestParams = {
      id: number | string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      UTCTimeDiff: number;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      id: number;
      notificationTime: string;
      stylization: {
        primaryColor?: string;
        secondaryColor?: string;
      };
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      userId: number;
    };
  }

  /**
   * No description
   * @tags settings
   * @name PatchById
   * @summary Update a setting by id
   * @request PATCH:/api/v1/settings/{id}
   */
  export namespace PatchById {
    export type RequestParams = {
      id: number | string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      UTCTimeDiff?: number;
      notificationTime?: string;
      stylization?: {
        primaryColor?: string;
        secondaryColor?: string;
      };
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      UTCTimeDiff: number;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      id: number;
      notificationTime: string;
      stylization: {
        primaryColor?: string;
        secondaryColor?: string;
      };
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      userId: number;
    };
  }
}

export namespace EventDrafts {
  /**
   * No description
   * @tags event_drafts
   * @name DeleteById
   * @summary Delete an event draft
   * @request DELETE:/api/v1/event_drafts/{id}
   */
  export namespace DeleteById {
    export type RequestParams = {
      id: number | string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      success: boolean;
    };
  }

  /**
   * No description
   * @tags event_drafts
   * @name GetAll
   * @summary Get all event drafts
   * @request GET:/api/v1/event_drafts
   */
  export namespace GetAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
      date: string;
      emoji: string;
      id: number;
      text: string;
      time: string | null;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      userId: number;
    }[];
  }

  /**
   * No description
   * @tags event_drafts
   * @name GetById
   * @summary Get an event draft
   * @request GET:/api/v1/event_drafts/{id}
   */
  export namespace GetById {
    export type RequestParams = {
      id: number | string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
      date: string;
      emoji: string;
      id: number;
      text: string;
      time: string | null;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      user: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags event_drafts
   * @name PatchById
   * @summary Update an event draft
   * @request PATCH:/api/v1/event_drafts/{id}
   */
  export namespace PatchById {
    export type RequestParams = {
      id: number | string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
      date?: string;
      emoji?: string;
      text?: string;
      time?: string | null;
      userId: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
      date: string;
      emoji: string;
      id: number;
      text: string;
      time: string | null;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      user: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags event_drafts
   * @name Post
   * @summary Create an event draft
   * @request POST:/api/v1/event_drafts
   */
  export namespace Post {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
      date: string;
      emoji: string;
      text: string;
      time: string | null;
      userId: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
      date: string;
      emoji: string;
      id: number;
      text: string;
      time: string | null;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      user: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      userId: number;
    };
  }
}

export namespace EventShares {
  /**
   * No description
   * @tags event_shares
   * @name DeleteByUuid
   * @summary Delete an event share by id
   * @request DELETE:/api/v1/event_shares/{uuid}
   */
  export namespace DeleteByUuid {
    export type RequestParams = {
      /** a UUID */
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      success: boolean;
    };
  }

  /**
   * No description
   * @tags event_shares
   * @name GetAll
   * @summary Get all event shares
   * @request GET:/api/v1/event_shares
   */
  export namespace GetAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      eventId: number;
      /** a UUID */
      id:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      targetUserId: number | null;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      usageAmount: number;
      usageLimit: number;
      userId: number;
    }[];
  }

  /**
   * No description
   * @tags event_shares
   * @name GetByUuid
   * @summary Get an event share by id
   * @request GET:/api/v1/event_shares/{uuid}
   */
  export namespace GetByUuid {
    export type RequestParams = {
      /** a UUID */
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      event: {
        copyFromId?: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
        date: string;
        datetime: string;
        emoji: string;
        id: number;
        notificationDatetime: string;
        text: string;
        time: string | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      };
      eventId: number;
      /** a UUID */
      id:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      targetUser: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      targetUserId: number | null;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      usageAmount: number;
      usageLimit: number;
      user: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags event_shares
   * @name PatchByUuid
   * @summary Update an event share by id
   * @request PATCH:/api/v1/event_shares/{uuid}
   */
  export namespace PatchByUuid {
    export type RequestParams = {
      /** a UUID */
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
    };
    export type RequestQuery = {};
    export type RequestBody = {
      targetUserId?: number | null;
      usageAmount?: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      event: {
        copyFromId?: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
        date: string;
        datetime: string;
        emoji: string;
        id: number;
        notificationDatetime: string;
        text: string;
        time: string | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      };
      eventId: number;
      /** a UUID */
      id:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      targetUser: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      targetUserId: number | null;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      usageAmount: number;
      usageLimit: number;
      user: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags event_shares
   * @name Post
   * @summary Create an event share
   * @request POST:/api/v1/event_shares
   */
  export namespace Post {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      eventId: number;
      targetUserId?: number | null;
      usageAmount?: number;
      usageLimit?: number;
      userId: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      event: {
        copyFromId?: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
        date: string;
        datetime: string;
        emoji: string;
        id: number;
        notificationDatetime: string;
        text: string;
        time: string | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      };
      eventId: number;
      /** a UUID */
      id:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      targetUser: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      targetUserId: number | null;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      usageAmount: number;
      usageLimit: number;
      user: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      userId: number;
    };
  }
}

export namespace Events {
  /**
   * No description
   * @tags events
   * @name DeleteById
   * @summary Delete an event
   * @request DELETE:/api/v1/events/{id}
   */
  export namespace DeleteById {
    export type RequestParams = {
      id: number | string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      success: boolean;
    };
  }

  /**
   * No description
   * @tags events
   * @name GetAll
   * @summary Get list of all events
   * @request GET:/api/v1/events
   */
  export namespace GetAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      copyFromId?: number;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
      date: string;
      datetime: string;
      emoji: string;
      id: number;
      notificationDatetime: string;
      text: string;
      time: string | null;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      userId: number;
    }[];
  }

  /**
   * No description
   * @tags events
   * @name GetById
   * @summary Get an event
   * @request GET:/api/v1/events/{id}
   */
  export namespace GetById {
    export type RequestParams = {
      id: number | string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      copyFromId?: number;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
      date: string;
      datetime: string;
      emoji: string;
      id: number;
      notificationDatetime: string;
      text: string;
      time: string | null;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      user: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags events
   * @name PatchById
   * @summary Update an event
   * @request PATCH:/api/v1/events/{id}
   */
  export namespace PatchById {
    export type RequestParams = {
      id: number | string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      copyFromId?: number;
      /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
      date?: string;
      datetime?: string;
      emoji?: string;
      notificationDatetime?: string;
      text?: string;
      time?: string | null;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      copyFromId?: number;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
      date: string;
      datetime: string;
      emoji: string;
      id: number;
      notificationDatetime: string;
      text: string;
      time: string | null;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      user: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags events
   * @name Post
   * @summary Create an event
   * @request POST:/api/v1/events
   */
  export namespace Post {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      copyFromId?: number;
      /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
      date?: string;
      datetime?: string;
      emoji?: string;
      notificationDatetime?: string;
      text?: string;
      time?: string | null;
      userId?: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      copyFromId?: number;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
      date: string;
      datetime: string;
      emoji: string;
      id: number;
      notificationDatetime: string;
      text: string;
      time: string | null;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      user: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      userId: number;
    };
  }
}

export namespace Payments {
  /**
   * No description
   * @tags payments
   * @name DeleteByUuid
   * @summary Delete a payment
   * @request DELETE:/api/v1/payments/{uuid}
   */
  export namespace DeleteByUuid {
    export type RequestParams = {
      /** a UUID */
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      success: boolean;
    };
  }

  /**
   * No description
   * @tags payments
   * @name GetAll
   * @summary Get all payments for a user
   * @request GET:/api/v1/payments
   */
  export namespace GetAll {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @pattern ^(?:(?!^-0$)-?(?:(?:0|[1-9]\d*)))$ */
      userId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      amount: number;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      currency: string;
      description: string;
      /** a UUID */
      id:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      /** a UUID */
      idempotenceKey:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      /** a UUID */
      paymentId:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      provider: string | null;
      providerPaymentId: string | null;
      status: "canceled" | "failed" | "in_progress" | "pending" | "success";
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      userId: number;
    }[];
  }

  /**
   * No description
   * @tags payments
   * @name GetByUuid
   * @summary Get a payment by UUID
   * @request GET:/api/v1/payments/{uuid}
   */
  export namespace GetByUuid {
    export type RequestParams = {
      /** a UUID */
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      amount: number;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      currency: string;
      description: string;
      /** a UUID */
      id:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      /** a UUID */
      idempotenceKey:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      /** a UUID */
      paymentId:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      provider: string | null;
      providerPaymentId: string | null;
      status: "canceled" | "failed" | "in_progress" | "pending" | "success";
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      userId: number;
    };
  }

  /**
   * No description
   * @tags payments
   * @name PatchByUuid
   * @summary Update a payment
   * @request PATCH:/api/v1/payments/{uuid}
   */
  export namespace PatchByUuid {
    export type RequestParams = {
      /** a UUID */
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
    };
    export type RequestQuery = {};
    export type RequestBody = {
      amount?: number;
      currency?: string;
      description?: string;
      provider?: string | null;
      providerPaymentId?: string | null;
      status?: "canceled" | "failed" | "in_progress" | "pending" | "success";
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      amount: number;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      currency: string;
      description: string;
      /** a UUID */
      id:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      /** a UUID */
      idempotenceKey:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      /** a UUID */
      paymentId:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      provider: string | null;
      providerPaymentId: string | null;
      status: "canceled" | "failed" | "in_progress" | "pending" | "success";
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      userId: number;
    };
  }

  /**
   * No description
   * @tags payments
   * @name Post
   * @summary Create a payment
   * @request POST:/api/v1/payments
   */
  export namespace Post {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      amount: number;
      currency: string;
      description: string;
      provider?: string;
      providerPaymentId?: string;
      userId: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      amount: number;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      currency: string;
      description: string;
      /** a UUID */
      id:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      /** a UUID */
      idempotenceKey:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      /** a UUID */
      paymentId:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      provider: string | null;
      providerPaymentId: string | null;
      status: "canceled" | "failed" | "in_progress" | "pending" | "success";
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      userId: number;
    };
  }
}

export namespace Users {
  /**
   * No description
   * @tags users
   * @name DeleteById
   * @summary Delete user
   * @request DELETE:/api/v1/users/{id}
   */
  export namespace DeleteById {
    export type RequestParams = {
      id: number | string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      success: boolean;
    };
  }

  /**
   * No description
   * @tags users
   * @name GetAll
   * @summary Get list of users
   * @request GET:/api/v1/users
   */
  export namespace GetAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      firstName: string | null;
      fullName: string;
      id: number;
      lastName: string | null;
      role: "admin" | "staff" | "user";
      telegramUserId: string;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
    }[];
  }

  /**
   * No description
   * @tags users
   * @name GetById
   * @summary Get user by id
   * @request GET:/api/v1/users/{id}
   */
  export namespace GetById {
    export type RequestParams = {
      id: number | string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      eventDrafts: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      events: {
        copyFromId?: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
        date: string;
        datetime: string;
        emoji: string;
        id: number;
        notificationDatetime: string;
        text: string;
        time: string | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      firstName: string | null;
      friends: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      }[];
      fullName: string;
      id: number;
      incomingEventShares: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        eventId: number;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        targetUserId: number | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      incomingFriendshipRequests: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        status: "accepted" | "pending" | "rejected";
        targetUserId: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      lastName: string | null;
      outgoingEventShares: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        eventId: number;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        targetUserId: number | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      outgoingFriendshipRequests: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        status: "accepted" | "pending" | "rejected";
        targetUserId: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      payments: {
        amount: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        currency: string;
        description: string;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        /** a UUID */
        idempotenceKey:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        /** a UUID */
        paymentId:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        provider: string | null;
        providerPaymentId: string | null;
        status: "canceled" | "failed" | "in_progress" | "pending" | "success";
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      rewards: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        description: string;
        id: number;
        name: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      }[];
      role: "admin" | "staff" | "user";
      settings: {
        UTCTimeDiff: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        id: number;
        notificationTime: string;
        stylization: {
          primaryColor?: string;
          secondaryColor?: string;
        };
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      };
      statistics: {
        activityRating: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        createdEventsCount: number;
        friendsCount: number;
        id: number;
        sentRequestsCount: number;
        sharedEventsCount: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      };
      subscription: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        endDate: string;
        id: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        startDate: string;
        status: "active" | "canceled" | "expired";
        type: "paid" | "trial";
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      };
      telegramUserId: string;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
    };
  }

  /**
   * No description
   * @tags users
   * @name PatchById
   * @summary Update user
   * @request PATCH:/api/v1/users/{id}
   */
  export namespace PatchById {
    export type RequestParams = {
      id: number | string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      firstName?: string | null;
      lastName?: string | null;
      role?: "admin" | "staff" | "user";
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      eventDrafts: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      events: {
        copyFromId?: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
        date: string;
        datetime: string;
        emoji: string;
        id: number;
        notificationDatetime: string;
        text: string;
        time: string | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      firstName: string | null;
      friends: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      }[];
      fullName: string;
      id: number;
      incomingEventShares: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        eventId: number;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        targetUserId: number | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      incomingFriendshipRequests: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        status: "accepted" | "pending" | "rejected";
        targetUserId: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      lastName: string | null;
      outgoingEventShares: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        eventId: number;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        targetUserId: number | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      outgoingFriendshipRequests: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        status: "accepted" | "pending" | "rejected";
        targetUserId: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      payments: {
        amount: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        currency: string;
        description: string;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        /** a UUID */
        idempotenceKey:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        /** a UUID */
        paymentId:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        provider: string | null;
        providerPaymentId: string | null;
        status: "canceled" | "failed" | "in_progress" | "pending" | "success";
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      rewards: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        description: string;
        id: number;
        name: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      }[];
      role: "admin" | "staff" | "user";
      settings: {
        UTCTimeDiff: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        id: number;
        notificationTime: string;
        stylization: {
          primaryColor?: string;
          secondaryColor?: string;
        };
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      };
      statistics: {
        activityRating: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        createdEventsCount: number;
        friendsCount: number;
        id: number;
        sentRequestsCount: number;
        sharedEventsCount: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      };
      subscription: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        endDate: string;
        id: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        startDate: string;
        status: "active" | "canceled" | "expired";
        type: "paid" | "trial";
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      };
      telegramUserId: string;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
    };
  }

  /**
   * No description
   * @tags users
   * @name PatchByIdIncreaseRequestsCount
   * @summary Increase requests count for user
   * @request PATCH:/api/v1/users/{id}/increase_requests_count
   */
  export namespace PatchByIdIncreaseRequestsCount {
    export type RequestParams = {
      id: number | string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      success: boolean;
    };
  }

  /**
   * No description
   * @tags users
   * @name Post
   * @summary Create user
   * @request POST:/api/v1/users
   */
  export namespace Post {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      firstName: string | null;
      lastName: string | null;
      telegramUserId: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      eventDrafts: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
        date: string;
        emoji: string;
        id: number;
        text: string;
        time: string | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      events: {
        copyFromId?: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
        date: string;
        datetime: string;
        emoji: string;
        id: number;
        notificationDatetime: string;
        text: string;
        time: string | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      firstName: string | null;
      friends: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      }[];
      fullName: string;
      id: number;
      incomingEventShares: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        eventId: number;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        targetUserId: number | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      incomingFriendshipRequests: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        status: "accepted" | "pending" | "rejected";
        targetUserId: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      lastName: string | null;
      outgoingEventShares: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        eventId: number;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        targetUserId: number | null;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        usageAmount: number;
        usageLimit: number;
        userId: number;
      }[];
      outgoingFriendshipRequests: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        status: "accepted" | "pending" | "rejected";
        targetUserId: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      payments: {
        amount: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        currency: string;
        description: string;
        /** a UUID */
        id:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        /** a UUID */
        idempotenceKey:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        /** a UUID */
        paymentId:
          | string
          | "00000000-0000-0000-0000-000000000000"
          | "ffffffff-ffff-ffff-ffff-ffffffffffff";
        provider: string | null;
        providerPaymentId: string | null;
        status: "canceled" | "failed" | "in_progress" | "pending" | "success";
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      }[];
      rewards: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        description: string;
        id: number;
        name: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      }[];
      role: "admin" | "staff" | "user";
      settings: {
        UTCTimeDiff: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        id: number;
        notificationTime: string;
        stylization: {
          primaryColor?: string;
          secondaryColor?: string;
        };
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      };
      statistics: {
        activityRating: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        createdEventsCount: number;
        friendsCount: number;
        id: number;
        sentRequestsCount: number;
        sharedEventsCount: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      };
      subscription: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        endDate: string;
        id: number;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        startDate: string;
        status: "active" | "canceled" | "expired";
        type: "paid" | "trial";
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
        userId: number;
      };
      telegramUserId: string;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
    };
  }
}

export namespace Friendship {
  /**
   * No description
   * @tags friendship
   * @name DeleteByUuid
   * @summary Delete a friendship request
   * @request DELETE:/api/v1/friendship/{uuid}
   */
  export namespace DeleteByUuid {
    export type RequestParams = {
      /** a UUID */
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      success: boolean;
    };
  }

  /**
   * No description
   * @tags friendship
   * @name GetAll
   * @summary Get all friendship requests
   * @request GET:/api/v1/friendship
   */
  export namespace GetAll {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @pattern ^(?:(?!^-0$)-?(?:(?:0|[1-9]\d*)))$ */
      userId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      /** a UUID */
      id:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
      status: "accepted" | "pending" | "rejected";
      targetUserId: number;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      userId: number;
    }[];
  }

  /**
   * No description
   * @tags friendship
   * @name GetByUuid
   * @summary Get a friendship request
   * @request GET:/api/v1/friendship/{uuid}
   */
  export namespace GetByUuid {
    export type RequestParams = {
      /** a UUID */
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      status: "accepted" | "pending" | "rejected";
      targetUser: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      targetUserId: number;
      user: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags friendship
   * @name PatchByUuid
   * @summary Update a friendship request
   * @request PATCH:/api/v1/friendship/{uuid}
   */
  export namespace PatchByUuid {
    export type RequestParams = {
      /** a UUID */
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff";
    };
    export type RequestQuery = {};
    export type RequestBody = {
      status: "accepted" | "pending" | "rejected";
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      status: "accepted" | "pending" | "rejected";
      targetUser: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      targetUserId: number;
      user: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      userId: number;
    };
  }

  /**
   * No description
   * @tags friendship
   * @name Post
   * @summary Create a friendship request
   * @request POST:/api/v1/friendship
   */
  export namespace Post {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      targetUserId: number;
      userId: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      status: "accepted" | "pending" | "rejected";
      targetUser: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      targetUserId: number;
      user: {
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        createdAt: string;
        firstName: string | null;
        fullName: string;
        id: number;
        lastName: string | null;
        role: "admin" | "staff" | "user";
        telegramUserId: string;
        /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
        updatedAt: string;
      };
      userId: number;
    };
  }
}

export namespace Subscriptions {
  /**
   * No description
   * @tags subscriptions
   * @name GetByIdCheck
   * @summary Check subscription by id
   * @request GET:/api/v1/subscriptions/{id}/check
   */
  export namespace GetByIdCheck {
    export type RequestParams = {
      id: number | string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      createdAt: string;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      endDate: string;
      id: number;
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      startDate: string;
      status: "active" | "canceled" | "expired";
      type: "paid" | "trial";
      /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
      updatedAt: string;
      userId: number;
    };
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

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
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
  public baseUrl: string = "http://localhost:8080";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

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
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
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

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
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

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
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

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
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
 * @title Daylik API
 * @version 1.0.0
 * @baseUrl http://localhost:8080
 * @contact Aleksei Bykovskii <aybykovskii@gmail.com>
 *
 * API for Daylik
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name GetApiToken
     * @summary Create a token for a user
     * @request GET:/api/auth/token
     */
    getApiToken: (
      query?: {
        telegramUserId?: string;
        /** @pattern ^(?:(?!^-0$)-?(?:(?:0|[1-9]\d*)))$ */
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          token: string;
        },
        GetApiAuthTokenError
      >({
        path: `/api/auth/token`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  settings = {
    /**
     * No description
     *
     * @tags settings
     * @name GetAll
     * @summary Get list of all settings
     * @request GET:/api/v1/settings
     */
    getAll: (params: RequestParams = {}) =>
      this.request<
        {
          UTCTimeDiff: number;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          id: number;
          notificationTime: string;
          stylization: {
            primaryColor?: string;
            secondaryColor?: string;
          };
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          userId: number;
        }[],
        GetSettingsError
      >({
        path: `/api/v1/settings`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags settings
     * @name GetById
     * @summary Get a setting by id
     * @request GET:/api/v1/settings/{id}
     */
    getById: (id: number | string, params: RequestParams = {}) =>
      this.request<
        {
          UTCTimeDiff: number;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          id: number;
          notificationTime: string;
          stylization: {
            primaryColor?: string;
            secondaryColor?: string;
          };
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          userId: number;
        },
        GetSettingsByIdError
      >({
        path: `/api/v1/settings/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags settings
     * @name PatchById
     * @summary Update a setting by id
     * @request PATCH:/api/v1/settings/{id}
     */
    patchById: (
      id: number | string,
      data: {
        UTCTimeDiff?: number;
        notificationTime?: string;
        stylization?: {
          primaryColor?: string;
          secondaryColor?: string;
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          UTCTimeDiff: number;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          id: number;
          notificationTime: string;
          stylization: {
            primaryColor?: string;
            secondaryColor?: string;
          };
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          userId: number;
        },
        PatchSettingsByIdError
      >({
        path: `/api/v1/settings/${id}`,
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
     * @name DeleteById
     * @summary Delete an event draft
     * @request DELETE:/api/v1/event_drafts/{id}
     */
    deleteById: (id: number | string, params: RequestParams = {}) =>
      this.request<
        {
          success: boolean;
        },
        DeleteEventDraftsByIdError
      >({
        path: `/api/v1/event_drafts/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event_drafts
     * @name GetAll
     * @summary Get all event drafts
     * @request GET:/api/v1/event_drafts
     */
    getAll: (params: RequestParams = {}) =>
      this.request<
        {
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
          date: string;
          emoji: string;
          id: number;
          text: string;
          time: string | null;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
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
     * @name GetById
     * @summary Get an event draft
     * @request GET:/api/v1/event_drafts/{id}
     */
    getById: (id: number | string, params: RequestParams = {}) =>
      this.request<
        {
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
          date: string;
          emoji: string;
          id: number;
          text: string;
          time: string | null;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          user: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          userId: number;
        },
        GetEventDraftsByIdError
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
     * @name PatchById
     * @summary Update an event draft
     * @request PATCH:/api/v1/event_drafts/{id}
     */
    patchById: (
      id: number | string,
      data: {
        /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
        date?: string;
        emoji?: string;
        text?: string;
        time?: string | null;
        userId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
          date: string;
          emoji: string;
          id: number;
          text: string;
          time: string | null;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          user: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          userId: number;
        },
        PatchEventDraftsByIdError
      >({
        path: `/api/v1/event_drafts/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event_drafts
     * @name Post
     * @summary Create an event draft
     * @request POST:/api/v1/event_drafts
     */
    post: (
      data: {
        /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
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
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
          date: string;
          emoji: string;
          id: number;
          text: string;
          time: string | null;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          user: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          userId: number;
        },
        PostEventDraftsError
      >({
        path: `/api/v1/event_drafts`,
        method: "POST",
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
     * @name DeleteByUuid
     * @summary Delete an event share by id
     * @request DELETE:/api/v1/event_shares/{uuid}
     */
    deleteByUuid: (
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff",
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
        },
        DeleteEventSharesByUuidError
      >({
        path: `/api/v1/event_shares/${uuid}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event_shares
     * @name GetAll
     * @summary Get all event shares
     * @request GET:/api/v1/event_shares
     */
    getAll: (params: RequestParams = {}) =>
      this.request<
        {
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          eventId: number;
          /** a UUID */
          id:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          targetUserId: number | null;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          usageAmount: number;
          usageLimit: number;
          userId: number;
        }[],
        GetEventSharesError
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
     * @name GetByUuid
     * @summary Get an event share by id
     * @request GET:/api/v1/event_shares/{uuid}
     */
    getByUuid: (
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff",
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          event: {
            copyFromId?: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
            date: string;
            datetime: string;
            emoji: string;
            id: number;
            notificationDatetime: string;
            text: string;
            time: string | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          };
          eventId: number;
          /** a UUID */
          id:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          targetUser: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          targetUserId: number | null;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          usageAmount: number;
          usageLimit: number;
          user: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          userId: number;
        },
        GetEventSharesByUuidError
      >({
        path: `/api/v1/event_shares/${uuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event_shares
     * @name PatchByUuid
     * @summary Update an event share by id
     * @request PATCH:/api/v1/event_shares/{uuid}
     */
    patchByUuid: (
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff",
      data: {
        targetUserId?: number | null;
        usageAmount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          event: {
            copyFromId?: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
            date: string;
            datetime: string;
            emoji: string;
            id: number;
            notificationDatetime: string;
            text: string;
            time: string | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          };
          eventId: number;
          /** a UUID */
          id:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          targetUser: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          targetUserId: number | null;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          usageAmount: number;
          usageLimit: number;
          user: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          userId: number;
        },
        PatchEventSharesByUuidError
      >({
        path: `/api/v1/event_shares/${uuid}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event_shares
     * @name Post
     * @summary Create an event share
     * @request POST:/api/v1/event_shares
     */
    post: (
      data: {
        eventId: number;
        targetUserId?: number | null;
        usageAmount?: number;
        usageLimit?: number;
        userId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          event: {
            copyFromId?: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
            date: string;
            datetime: string;
            emoji: string;
            id: number;
            notificationDatetime: string;
            text: string;
            time: string | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          };
          eventId: number;
          /** a UUID */
          id:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          targetUser: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          targetUserId: number | null;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          usageAmount: number;
          usageLimit: number;
          user: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          userId: number;
        },
        PostEventSharesError
      >({
        path: `/api/v1/event_shares`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  events = {
    /**
     * No description
     *
     * @tags events
     * @name DeleteById
     * @summary Delete an event
     * @request DELETE:/api/v1/events/{id}
     */
    deleteById: (id: number | string, params: RequestParams = {}) =>
      this.request<
        {
          success: boolean;
        },
        DeleteEventsByIdError
      >({
        path: `/api/v1/events/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name GetAll
     * @summary Get list of all events
     * @request GET:/api/v1/events
     */
    getAll: (params: RequestParams = {}) =>
      this.request<
        {
          copyFromId?: number;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
          date: string;
          datetime: string;
          emoji: string;
          id: number;
          notificationDatetime: string;
          text: string;
          time: string | null;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          userId: number;
        }[],
        GetEventsError
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
     * @name GetById
     * @summary Get an event
     * @request GET:/api/v1/events/{id}
     */
    getById: (id: number | string, params: RequestParams = {}) =>
      this.request<
        {
          copyFromId?: number;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
          date: string;
          datetime: string;
          emoji: string;
          id: number;
          notificationDatetime: string;
          text: string;
          time: string | null;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          user: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          userId: number;
        },
        GetEventsByIdError
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
     * @name PatchById
     * @summary Update an event
     * @request PATCH:/api/v1/events/{id}
     */
    patchById: (
      id: number | string,
      data: {
        copyFromId?: number;
        /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
        date?: string;
        datetime?: string;
        emoji?: string;
        notificationDatetime?: string;
        text?: string;
        time?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          copyFromId?: number;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
          date: string;
          datetime: string;
          emoji: string;
          id: number;
          notificationDatetime: string;
          text: string;
          time: string | null;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          user: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          userId: number;
        },
        PatchEventsByIdError
      >({
        path: `/api/v1/events/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name Post
     * @summary Create an event
     * @request POST:/api/v1/events
     */
    post: (
      data: {
        copyFromId?: number;
        /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
        date?: string;
        datetime?: string;
        emoji?: string;
        notificationDatetime?: string;
        text?: string;
        time?: string | null;
        userId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          copyFromId?: number;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
          date: string;
          datetime: string;
          emoji: string;
          id: number;
          notificationDatetime: string;
          text: string;
          time: string | null;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          user: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          userId: number;
        },
        PostEventsError
      >({
        path: `/api/v1/events`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  payments = {
    /**
     * No description
     *
     * @tags payments
     * @name DeleteByUuid
     * @summary Delete a payment
     * @request DELETE:/api/v1/payments/{uuid}
     */
    deleteByUuid: (
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff",
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
        },
        DeletePaymentsByUuidError
      >({
        path: `/api/v1/payments/${uuid}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payments
     * @name GetAll
     * @summary Get all payments for a user
     * @request GET:/api/v1/payments
     */
    getAll: (
      query?: {
        /** @pattern ^(?:(?!^-0$)-?(?:(?:0|[1-9]\d*)))$ */
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          amount: number;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          currency: string;
          description: string;
          /** a UUID */
          id:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          /** a UUID */
          idempotenceKey:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          /** a UUID */
          paymentId:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          provider: string | null;
          providerPaymentId: string | null;
          status: "canceled" | "failed" | "in_progress" | "pending" | "success";
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          userId: number;
        }[],
        GetPaymentsError
      >({
        path: `/api/v1/payments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payments
     * @name GetByUuid
     * @summary Get a payment by UUID
     * @request GET:/api/v1/payments/{uuid}
     */
    getByUuid: (
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff",
      params: RequestParams = {},
    ) =>
      this.request<
        {
          amount: number;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          currency: string;
          description: string;
          /** a UUID */
          id:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          /** a UUID */
          idempotenceKey:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          /** a UUID */
          paymentId:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          provider: string | null;
          providerPaymentId: string | null;
          status: "canceled" | "failed" | "in_progress" | "pending" | "success";
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          userId: number;
        },
        GetPaymentsByUuidError
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
     * @name PatchByUuid
     * @summary Update a payment
     * @request PATCH:/api/v1/payments/{uuid}
     */
    patchByUuid: (
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff",
      data: {
        amount?: number;
        currency?: string;
        description?: string;
        provider?: string | null;
        providerPaymentId?: string | null;
        status?: "canceled" | "failed" | "in_progress" | "pending" | "success";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          amount: number;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          currency: string;
          description: string;
          /** a UUID */
          id:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          /** a UUID */
          idempotenceKey:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          /** a UUID */
          paymentId:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          provider: string | null;
          providerPaymentId: string | null;
          status: "canceled" | "failed" | "in_progress" | "pending" | "success";
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          userId: number;
        },
        PatchPaymentsByUuidError
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
     * @name Post
     * @summary Create a payment
     * @request POST:/api/v1/payments
     */
    post: (
      data: {
        amount: number;
        currency: string;
        description: string;
        provider?: string;
        providerPaymentId?: string;
        userId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          amount: number;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          currency: string;
          description: string;
          /** a UUID */
          id:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          /** a UUID */
          idempotenceKey:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          /** a UUID */
          paymentId:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          provider: string | null;
          providerPaymentId: string | null;
          status: "canceled" | "failed" | "in_progress" | "pending" | "success";
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          userId: number;
        },
        PostPaymentsError
      >({
        path: `/api/v1/payments`,
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
     * @name DeleteById
     * @summary Delete user
     * @request DELETE:/api/v1/users/{id}
     */
    deleteById: (id: number | string, params: RequestParams = {}) =>
      this.request<
        {
          success: boolean;
        },
        DeleteUsersByIdError
      >({
        path: `/api/v1/users/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetAll
     * @summary Get list of users
     * @request GET:/api/v1/users
     */
    getAll: (params: RequestParams = {}) =>
      this.request<
        {
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          firstName: string | null;
          fullName: string;
          id: number;
          lastName: string | null;
          role: "admin" | "staff" | "user";
          telegramUserId: string;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
        }[],
        GetUsersError
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
     * @name GetById
     * @summary Get user by id
     * @request GET:/api/v1/users/{id}
     */
    getById: (id: number | string, params: RequestParams = {}) =>
      this.request<
        {
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          eventDrafts: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          events: {
            copyFromId?: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
            date: string;
            datetime: string;
            emoji: string;
            id: number;
            notificationDatetime: string;
            text: string;
            time: string | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          firstName: string | null;
          friends: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          }[];
          fullName: string;
          id: number;
          incomingEventShares: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            eventId: number;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            targetUserId: number | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          incomingFriendshipRequests: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            status: "accepted" | "pending" | "rejected";
            targetUserId: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          lastName: string | null;
          outgoingEventShares: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            eventId: number;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            targetUserId: number | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          outgoingFriendshipRequests: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            status: "accepted" | "pending" | "rejected";
            targetUserId: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          payments: {
            amount: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            currency: string;
            description: string;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            /** a UUID */
            idempotenceKey:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            /** a UUID */
            paymentId:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            provider: string | null;
            providerPaymentId: string | null;
            status:
              | "canceled"
              | "failed"
              | "in_progress"
              | "pending"
              | "success";
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          rewards: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            description: string;
            id: number;
            name: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          }[];
          role: "admin" | "staff" | "user";
          settings: {
            UTCTimeDiff: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            id: number;
            notificationTime: string;
            stylization: {
              primaryColor?: string;
              secondaryColor?: string;
            };
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          };
          statistics: {
            activityRating: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            createdEventsCount: number;
            friendsCount: number;
            id: number;
            sentRequestsCount: number;
            sharedEventsCount: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          };
          subscription: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            endDate: string;
            id: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            startDate: string;
            status: "active" | "canceled" | "expired";
            type: "paid" | "trial";
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          };
          telegramUserId: string;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
        },
        GetUsersByIdError
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
     * @name PatchById
     * @summary Update user
     * @request PATCH:/api/v1/users/{id}
     */
    patchById: (
      id: number | string,
      data: {
        firstName?: string | null;
        lastName?: string | null;
        role?: "admin" | "staff" | "user";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          eventDrafts: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          events: {
            copyFromId?: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
            date: string;
            datetime: string;
            emoji: string;
            id: number;
            notificationDatetime: string;
            text: string;
            time: string | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          firstName: string | null;
          friends: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          }[];
          fullName: string;
          id: number;
          incomingEventShares: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            eventId: number;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            targetUserId: number | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          incomingFriendshipRequests: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            status: "accepted" | "pending" | "rejected";
            targetUserId: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          lastName: string | null;
          outgoingEventShares: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            eventId: number;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            targetUserId: number | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          outgoingFriendshipRequests: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            status: "accepted" | "pending" | "rejected";
            targetUserId: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          payments: {
            amount: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            currency: string;
            description: string;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            /** a UUID */
            idempotenceKey:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            /** a UUID */
            paymentId:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            provider: string | null;
            providerPaymentId: string | null;
            status:
              | "canceled"
              | "failed"
              | "in_progress"
              | "pending"
              | "success";
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          rewards: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            description: string;
            id: number;
            name: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          }[];
          role: "admin" | "staff" | "user";
          settings: {
            UTCTimeDiff: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            id: number;
            notificationTime: string;
            stylization: {
              primaryColor?: string;
              secondaryColor?: string;
            };
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          };
          statistics: {
            activityRating: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            createdEventsCount: number;
            friendsCount: number;
            id: number;
            sentRequestsCount: number;
            sharedEventsCount: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          };
          subscription: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            endDate: string;
            id: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            startDate: string;
            status: "active" | "canceled" | "expired";
            type: "paid" | "trial";
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          };
          telegramUserId: string;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
        },
        PatchUsersByIdError
      >({
        path: `/api/v1/users/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name PatchByIdIncreaseRequestsCount
     * @summary Increase requests count for user
     * @request PATCH:/api/v1/users/{id}/increase_requests_count
     */
    patchByIdIncreaseRequestsCount: (
      id: number | string,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
        },
        PatchUsersByIdIncreaseRequestsCountError
      >({
        path: `/api/v1/users/${id}/increase_requests_count`,
        method: "PATCH",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name Post
     * @summary Create user
     * @request POST:/api/v1/users
     */
    post: (
      data: {
        firstName: string | null;
        lastName: string | null;
        telegramUserId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          eventDrafts: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
            date: string;
            emoji: string;
            id: number;
            text: string;
            time: string | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          events: {
            copyFromId?: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** @pattern 202[5-9]\.[0-1][0-9]\.[0-3][0-9] */
            date: string;
            datetime: string;
            emoji: string;
            id: number;
            notificationDatetime: string;
            text: string;
            time: string | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          firstName: string | null;
          friends: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          }[];
          fullName: string;
          id: number;
          incomingEventShares: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            eventId: number;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            targetUserId: number | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          incomingFriendshipRequests: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            status: "accepted" | "pending" | "rejected";
            targetUserId: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          lastName: string | null;
          outgoingEventShares: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            eventId: number;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            targetUserId: number | null;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            usageAmount: number;
            usageLimit: number;
            userId: number;
          }[];
          outgoingFriendshipRequests: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            status: "accepted" | "pending" | "rejected";
            targetUserId: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          payments: {
            amount: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            currency: string;
            description: string;
            /** a UUID */
            id:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            /** a UUID */
            idempotenceKey:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            /** a UUID */
            paymentId:
              | string
              | "00000000-0000-0000-0000-000000000000"
              | "ffffffff-ffff-ffff-ffff-ffffffffffff";
            provider: string | null;
            providerPaymentId: string | null;
            status:
              | "canceled"
              | "failed"
              | "in_progress"
              | "pending"
              | "success";
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          }[];
          rewards: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            description: string;
            id: number;
            name: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          }[];
          role: "admin" | "staff" | "user";
          settings: {
            UTCTimeDiff: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            id: number;
            notificationTime: string;
            stylization: {
              primaryColor?: string;
              secondaryColor?: string;
            };
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          };
          statistics: {
            activityRating: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            createdEventsCount: number;
            friendsCount: number;
            id: number;
            sentRequestsCount: number;
            sharedEventsCount: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          };
          subscription: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            endDate: string;
            id: number;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            startDate: string;
            status: "active" | "canceled" | "expired";
            type: "paid" | "trial";
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
            userId: number;
          };
          telegramUserId: string;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
        },
        PostUsersError
      >({
        path: `/api/v1/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  friendship = {
    /**
     * No description
     *
     * @tags friendship
     * @name DeleteByUuid
     * @summary Delete a friendship request
     * @request DELETE:/api/v1/friendship/{uuid}
     */
    deleteByUuid: (
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff",
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
        },
        DeleteFriendshipByUuidError
      >({
        path: `/api/v1/friendship/${uuid}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags friendship
     * @name GetAll
     * @summary Get all friendship requests
     * @request GET:/api/v1/friendship
     */
    getAll: (
      query?: {
        /** @pattern ^(?:(?!^-0$)-?(?:(?:0|[1-9]\d*)))$ */
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          /** a UUID */
          id:
            | string
            | "00000000-0000-0000-0000-000000000000"
            | "ffffffff-ffff-ffff-ffff-ffffffffffff";
          status: "accepted" | "pending" | "rejected";
          targetUserId: number;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          userId: number;
        }[],
        GetFriendshipError
      >({
        path: `/api/v1/friendship`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags friendship
     * @name GetByUuid
     * @summary Get a friendship request
     * @request GET:/api/v1/friendship/{uuid}
     */
    getByUuid: (
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff",
      params: RequestParams = {},
    ) =>
      this.request<
        {
          status: "accepted" | "pending" | "rejected";
          targetUser: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          targetUserId: number;
          user: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          userId: number;
        },
        GetFriendshipByUuidError
      >({
        path: `/api/v1/friendship/${uuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags friendship
     * @name PatchByUuid
     * @summary Update a friendship request
     * @request PATCH:/api/v1/friendship/{uuid}
     */
    patchByUuid: (
      uuid:
        | string
        | "00000000-0000-0000-0000-000000000000"
        | "ffffffff-ffff-ffff-ffff-ffffffffffff",
      data: {
        status: "accepted" | "pending" | "rejected";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          status: "accepted" | "pending" | "rejected";
          targetUser: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          targetUserId: number;
          user: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          userId: number;
        },
        PatchFriendshipByUuidError
      >({
        path: `/api/v1/friendship/${uuid}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags friendship
     * @name Post
     * @summary Create a friendship request
     * @request POST:/api/v1/friendship
     */
    post: (
      data: {
        targetUserId: number;
        userId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          status: "accepted" | "pending" | "rejected";
          targetUser: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          targetUserId: number;
          user: {
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            createdAt: string;
            firstName: string | null;
            fullName: string;
            id: number;
            lastName: string | null;
            role: "admin" | "staff" | "user";
            telegramUserId: string;
            /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
            updatedAt: string;
          };
          userId: number;
        },
        PostFriendshipError
      >({
        path: `/api/v1/friendship`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  subscriptions = {
    /**
     * No description
     *
     * @tags subscriptions
     * @name GetByIdCheck
     * @summary Check subscription by id
     * @request GET:/api/v1/subscriptions/{id}/check
     */
    getByIdCheck: (id: number | string, params: RequestParams = {}) =>
      this.request<
        {
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          createdAt: string;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          endDate: string;
          id: number;
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          startDate: string;
          status: "active" | "canceled" | "expired";
          type: "paid" | "trial";
          /** @pattern ^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$ */
          updatedAt: string;
          userId: number;
        },
        GetSubscriptionsByIdCheckError
      >({
        path: `/api/v1/subscriptions/${id}/check`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
