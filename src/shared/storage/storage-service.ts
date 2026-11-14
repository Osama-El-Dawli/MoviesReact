import AsyncStorage from "@react-native-async-storage/async-storage";

export class StorageService {
  async getData(key: string): Promise<any> {
    const data = await AsyncStorage.getItem(key);
    return data;
  }

  async getAllData(): Promise<any> {
    const keys = await AsyncStorage.getAllKeys();
    const data = await Promise.all(
      keys.map(async (key: string) => {
        return await AsyncStorage.getItem(key);
      }),
    );
    return data;
  }

  async saveItem(key: string, item: string): Promise<void> {
    await AsyncStorage.setItem(key, item);
  }

  async deletItem(key: string) {
    await AsyncStorage.removeItem(key);
  }
}
