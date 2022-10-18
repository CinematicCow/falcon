/**
 * Global Gym Owner interface.
 */
export interface IOwner {
  id?: string;
  /**
   * User's legal first name.
   */
  firstName: string;
  /**
   * User's legal last name.
   */
  lastName: string;
  /**
   * User's email. It shold be unique for each user.
   */
  email: string;
  /**
   * It is hashed before being stored in the database.
   */
  password: string;
  /**
   * User's phone number. It should have an Indian Code (+91).
   */
  number: string;
  /**
   * Is set to true once the user has confirmed their email.
   * @default false
   */
  isEmailVerified?: boolean;
}
