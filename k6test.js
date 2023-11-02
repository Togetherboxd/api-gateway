import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10, // Number of virtual users (simulated users)
  duration: '30s', // Test duration
};

export default function () {
  // Send a GET request to your API gateway
  let response = http.get('http://localhost:3003');

  // Check the response to ensure it's a 200 OK status
  check(response, { 'status is 200': (r) => r.status === 200 });

  // Sleep to simulate user behavior (you can adjust the sleep duration)
  sleep(1);
}
