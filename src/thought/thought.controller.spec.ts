import { Test, TestingModule } from '@nestjs/testing';
import { ThoughtController } from './thought.controller';

describe('ThoughtController', () => {
  let controller: ThoughtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThoughtController],
    }).compile();

    controller = module.get<ThoughtController>(ThoughtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
