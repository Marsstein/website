# CLAUDE.md

## Project Cleanup Guidelines

### Code Standards
- Remove all comments unless absolutely necessary for functionality
- No linter exceptions - fix issues at source
- Keep UI exactly as is - no visual changes
- Use conventional commits (feat:, fix:, refactor:, etc.)
- Atomic commits per file/component change
- User commits only - never Claude Code attribution
- Never ask for confirmation once task is understood
- Triple check UI/site behavior remains identical after each change
- Website must run on port 8080 during development
- Compare all changes live by viewing localhost:8080

### Cleanup Strategy
Each major area gets separate branch:
- `cleanup/config` - Build config, package.json, TypeScript
- `cleanup/routes` - Routing structure and lazy loading
- `cleanup/components` - Component organization and optimization
- `cleanup/tests` - Test setup and validation
- `cleanup/scripts` - Build and prerender scripts

### Essential Commands
```bash
npm run dev              # Development server
npm run build            # Production build
npm run lint             # Code linting
```

### Git Workflow
1. Create feature branch from main
2. Make atomic changes per file
3. Conventional commits with detailed descriptions
4. Detailed PR descriptions for each cleanup phase
5. User as commit author only