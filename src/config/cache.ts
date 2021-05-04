import { CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory';

const serviceCache = new CacheContainer(new MemoryStorage());

const setTokenUsage = (key:string, value:number=0) => serviceCache.setItem(`${key}`, value , {ttl: 1000 * 60 * 60 * 24});

const getTokenUsage = (key:string ) => serviceCache.getItem(`${key}`);

const cache = { setTokenUsage, getTokenUsage }

export default cache;