import { IsString } from 'class-validator';
import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { Todo } from '../entities/Todo';

@InputType()
class CreateTodoText {
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
  async Todos(): Promise<Todo[]> {
    return Todo.find();
  }

  @Mutation(() => Boolean)
  async createTodoText(@Arg('todoTextInput') todoTextInput: CreateTodoText): Promise<boolean> {
    try {
      const { text } = todoTextInput;

      const newTodo = Todo.create({ text });
      await Todo.insert(newTodo);

      return true;
    } catch (e) {
      return false;
    }
  }

  @Mutation(() => Boolean)
  async UpdateTodo(@Arg('UpdateTodoInput') updateTodoInput: UpdateTodoInput): Promise<boolean> {
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
      if (isCompleted) {
        todo.isCompleted = isCompleted;
      }

      todo.save();
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
}
