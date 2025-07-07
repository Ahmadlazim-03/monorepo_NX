import PocketBase from 'pocketbase';
export const pb = new PocketBase('https://database.ahmadlazim.works');
pb.autoCancellation(false);