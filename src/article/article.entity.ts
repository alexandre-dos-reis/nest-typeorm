import { Entity, Column } from "typeorm";
import { Node } from "src/models/node.basemodel";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Article extends Node {
  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  content: string;

  @ApiProperty()
  @Column({ default: false })
  isOnline: boolean;
}
