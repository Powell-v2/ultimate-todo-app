import { Test, TestingModule } from '@nestjs/testing';
import { SubtasksResolver } from './subtasks.resolver';

describe('SubtasksResolver', () => {
  let resolver: SubtasksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubtasksResolver],
    }).compile();

    resolver = module.get<SubtasksResolver>(SubtasksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
