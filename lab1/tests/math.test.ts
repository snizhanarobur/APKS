import { describe, it, expect } from 'vitest';
import { add } from '../src/index.js';

describe('Basic Addition Test', () => {
  it('should correctly add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});