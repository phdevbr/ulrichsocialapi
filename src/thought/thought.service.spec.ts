import { Test, TestingModule } from '@nestjs/testing';
import { ThoughtService } from './thought.service';

describe('ThoughtService', () => {
  let service: ThoughtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThoughtService],
    }).compile();

    service = module.get<ThoughtService>(ThoughtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
