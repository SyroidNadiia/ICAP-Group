export const selectUser = (state: any) => state.auth.user;

const authSelectors = {
  selectUser,
};
export default authSelectors;
