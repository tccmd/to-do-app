import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ comment: 'Todo 텍스트', nullable: false })
  @Field({ description: 'Todo 텍스트' })
  text: string;

  @Column({ comment: '완료', default: false })
  @Field({ description: '완료', defaultValue: false })
  isCompleted: boolean;

  @Column({ comment: '우선 순위', default: 0 })
  @Field(() => Int, { description: '우선 순위', defaultValue: 0 })
  priority: number;

  @CreateDateColumn({ comment: '생성 일자' })
  @Field(() => String, { description: '생성 일자' })
  createdAt: Date;

  @CreateDateColumn({ comment: '수정 일자' })
  @Field(() => String, { description: '수정 일자' })
  updatedAt?: Date;
}
