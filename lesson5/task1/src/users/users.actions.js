export const NEXT_PAGE_USERS = 'USER/NEXT_PAGE_USERS';
export const PREV_PAGE_USERS = 'USER/PREV_PAGE_USERS';

export const goNext = () => ({ type: NEXT_PAGE_USERS });

export const goPrev = () => ({ type: PREV_PAGE_USERS });
