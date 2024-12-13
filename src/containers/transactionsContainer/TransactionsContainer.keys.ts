export const usersKeys = {
  all: ['users'] as const,
  byPlanet: (id: string) => [...usersKeys.all, 'planet', id] as const,
}

export const transactionsKeys = {
  all: ['transactions'] as const,
  byUsers: (ids: string[]) =>
    [...transactionsKeys.all, usersKeys.all, ids] as const,
  updateBatch: () => [...transactionsKeys.all, 'update-batch'] as const,
}
