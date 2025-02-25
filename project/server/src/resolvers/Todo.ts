import { IsString } from 'class-validator';
import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { Todo } from '../entities/Todo';

@InputType()
class AddTodoInput {
  @Field({ description: 'Todo 텍스트 인풋 데이터' })
  @IsString()
  text: string;
}

@InputType()
class UpdateTodoInput {
  @Field()
  id!: number;

  @Field({ nullable: true })
  text?: string;

  @Field({ nullable: true })
  isCompleted?: boolean;
}

@Resolver(Todo)
export class TodoResolver {
  @Query(() => [Todo])
  async todos(): Promise<Todo[]> {
    return Todo.find();
  }

  @Query(() => Todo)
  async todo(@Arg('id') id: number): Promise<Todo | null> {
    return Todo.findOne({ where: { id } });
  }

  @Mutation(() => Todo)
  async addTodo(@Arg('todoTextInput') todoTextInput: AddTodoInput): Promise<Todo | null> {
    try {
      const { text } = todoTextInput;

      const newTodo = await Todo.create({ text }).save();
      console.log(newTodo);

      return newTodo;
    } catch (e) {
      return null;
    }
  }

  @Mutation(() => Boolean)
  async updateTodo(@Arg('updateTodoInput') updateTodoInput: UpdateTodoInput): Promise<boolean> {
    try {
      const { id, text, isCompleted } = updateTodoInput;
      // 조회
      const todo = await Todo.findOne({ where: { id } });

      if (!todo) {
        throw new Error('Todo not found');
      }

      if (text) {
        todo.text = text;
      }
      if (isCompleted != null) {
        todo.isCompleted = isCompleted;
      }

      console.log(updateTodoInput);

      await todo.save();
      return true;
    } catch (e) {
      return false;
    }
  }

  @Mutation(() => Boolean)
  async deleteTodo(@Arg('id') id: number): Promise<boolean> {
    try {
      const todo = await Todo.findOne({ where: { id } });

      if (!todo) {
        throw new Error('Todo not found');
      }

      await Todo.remove(todo);
      return true;
    } catch (e) {
      return false;
    }
  }

  @Mutation(() => Boolean)
  async updatePriority(@Arg('id') id: number, @Arg('priority') priority: number): Promise<boolean> {
    try {
      const todo = await Todo.findOne({ where: { id } });

      if (!todo) {
        throw new Error('Todo not found');
      }

      todo.priority = priority;
      await todo.save();
      return true;
    } catch (e) {
      return false;
    }
  }
}
