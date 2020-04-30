import { ChildFirstPipe } from './child-first.pipe';

describe('ChildFirstPipe', () => {
  it('create an instance', () => {
    const pipe = new ChildFirstPipe();
    expect(pipe).toBeTruthy();
  });
});
