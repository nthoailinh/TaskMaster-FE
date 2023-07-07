import axios from "axios";
import { env } from "./env";

export const ApiCaller = axios.create({
    baseURL: env.domain,
    headers: {'X-Custom-Header': 'foobar'}
  });