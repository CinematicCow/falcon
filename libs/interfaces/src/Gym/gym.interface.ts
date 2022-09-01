/**
 * Global gym interface.
 */
export interface IGym {
  id?: number;
  /**
   * Gym's legally registered name.
   **/
  name: string;
  /**
   * Unique name for URL.
   **/
  stub: string;
  /**
   * Gym's legally registered location.
   **/
  location: string;
  /**
   * Is gym operational for users.
   **/
  isActive?: boolean;
}
