// Declaring this interface provides type safety for message keys
type Messages = typeof import("./messages/en.json");

// eslint-disable-next-line no-unused-vars
declare interface IntlMessages extends Messages {}
