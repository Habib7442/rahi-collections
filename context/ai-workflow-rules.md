# AI Workflow Rules: Rahi's Collection

## Approach
- **Spec-Driven**: Read the relevant spec file in `context/specs/` before implementing any feature.
- **Incremental**: Build one "unit" at a time as defined in the `progress-tracker.md`.
- **Verification**: Run `npm run build` or linting checks after major changes.

## Scoping
- **No Speculative Changes**: Do not add features or dependencies not mentioned in the spec or PRD.
- **Single Focus**: Work on the current goal only. Do not refactor unrelated files unless they block the current task.

## Rules
1. **Sync Documentation**: If implementation deviates from `architecture.md` or `ui-context.md`, update those files immediately.
2. **Progress Tracking**: Update `context/progress-tracker.md` after every unit completion.
3. **No Placeholders**: Do not leave `// TODO` or placeholder images in the final code for a unit. Use the `generate_image` tool for real placeholders if needed.
4. **Commit Hygiene**: (Optional) Suggest commit messages that describe the *why* of the change.

## Missing Requirements
- If a requirement is missing or ambiguous, **ASK THE USER**. Do not guess architectural or design decisions.
- Reference the `PRD` in `project_docs/` as the source of truth for business logic.

## Verification Checklist
- [ ] Code is lint-free (`npm run lint`).
- [ ] Mobile responsiveness checked (390px).
- [ ] No console errors or warnings.
- [ ] All images have `alt` tags.
- [ ] Interactive elements have `aria-labels`.
