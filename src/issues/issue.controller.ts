import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateIssueDto } from './create-issue.dto.js';
import { IssuesService } from './issues.service.js';


// Sets /issues as the base path for this controller.
@Controller('issues')
export class IssuesController {
  constructor(private readonly issuesService: IssuesService) {}

  // Handles GET /issues and returns all saved issues.
  @Get()
  findAll() {
    return this.issuesService.findAll();
  }

  // Handles POST /issues and passes the title to the service.
  @Post()
  create(@Body() body: CreateIssueDto) {
    return this.issuesService.create(body.title);
  }
}