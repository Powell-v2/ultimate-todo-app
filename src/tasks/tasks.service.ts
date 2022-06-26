import { Injectable } from "@nestjs/common";
import { NewTaskInput } from "./dto/create-task.input";
import { TasksArgs } from "./dto/tasks.args";
import { UpdateTaskInput } from "./dto/update-task.input";
import { Task } from "./models/task.model";

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [];

  async findAll({ userId, args }: { userId?: string, args?: TasksArgs }): Promise<Task[]> {
    return this.tasks;
  }

  async findOneById(id: string): Promise<Task> {
    return this.tasks.find((task) => task.id === id);
  }

  async add(input: NewTaskInput): Promise<Task> {
    const augmented: Task = {
      ...input,
      id: String(Math.floor(1000 * Math.random())),
      createdAt: new Date(),
    }
    this.tasks.push(augmented)
    return augmented
  }

  async updateById(input: UpdateTaskInput): Promise<Task> {
    const idx = this.tasks.findIndex((task) => task.id === input.id)

    if (idx === -1) return null

    const updated = {
      ...this.tasks[idx],
      ...input,
    }

    this.tasks.splice(idx, 1, updated)

    return updated
  }

  async delete(id: string): Promise<boolean> {
    const idx = this.tasks.findIndex((task) => task.id === id)
    if (idx !== -1) {
      this.tasks.splice(idx, 1)
      return true
    }
    return false;
  }
}
