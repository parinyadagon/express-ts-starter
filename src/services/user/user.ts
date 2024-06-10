export class UserService {
  findAll = async (): Promise<any[]> => {
    return Promise.resolve([
      { name: "Parin", id: 1 },
      { name: "parin", id: 2 },
    ]);
  };
}
