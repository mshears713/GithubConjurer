# Code Review

## Making Each Other Better

**Code review** = Teammates reading and providing feedback on your code before it merges.

**Benefits everyone!**

---

## Why Code Review?

### Catch Bugs

**Fresh eyes spot mistakes**:
- Logic errors
- Edge cases
- Security issues
- Performance problems

**Better than finding bugs in production!**

### Share Knowledge

**Reviewers learn**:
- How features are implemented
- New techniques
- Project structure

**Authors learn**:
- Better approaches
- Best practices
- Team standards

### Maintain Quality

**Consistent standards**:
- Code style
- Documentation
- Testing
- Architecture

### Build Better Code

**Collaboration produces**:
- More maintainable code
- Better solutions
- Fewer bugs
- Shared ownership

---

## Being a Good PR Author

### Before Creating PR

**✅ Self-review first**:
1. Read through your own changes
2. Check for debug code
3. Verify tests pass
4. Ensure code is clean

**✅ Write clear description**:
```markdown
## What Changed
Added user authentication

## Why
Users need to save preferences

## How to Test
1. Visit /signup
2. Create account
3. Verify email sent
```

**✅ Keep PR small**:
- Easier to review
- Faster feedback
- Less overwhelming

**✅ One purpose**:
- Don't mix features and bug fixes
- Focused changes only

### During Review

**✅ Respond promptly**:
- Check for feedback daily
- Address comments quickly
- Don't let PRs languish

**✅ Be open to feedback**:
- Don't take it personally
- Consider suggestions
- Ask questions if unclear

**✅ Explain your choices**:
- If you disagree, explain why
- Provide context
- Discuss trade-offs

**✅ Make requested changes**:
- Address all feedback
- Push new commits
- Mark conversations resolved

---

## Being a Good Reviewer

### Approaching Review

**✅ Review promptly**:
- Don't block teammates
- Review within 24 hours
- Communicate if you're busy

**✅ Understand context**:
- Read PR description
- Understand the goal
- See the big picture

**✅ Run the code**:
- Pull branch locally
- Test functionality
- Verify it works

**✅ Be thorough but fair**:
- Check carefully
- But don't nitpick trivial things
- Focus on what matters

### What to Look For

**🔍 Functionality**:
- Does it work as intended?
- Are there edge cases?
- Could it break existing features?

**🔍 Code Quality**:
- Is it readable?
- Well-organized?
- Properly named variables?
- Comments where needed?

**🔍 Performance**:
- Efficient algorithms?
- Database queries optimized?
- No unnecessary loops?

**🔍 Security**:
- Input validation?
- SQL injection risks?
- XSS vulnerabilities?
- Sensitive data exposed?

**🔍 Tests**:
- Are there tests?
- Do they cover edge cases?
- Do they pass?

**🔍 Documentation**:
- Is it documented?
- Clear function names?
- Comments explain "why", not "what"?

### Leaving Comments

**✅ Be specific**:
```
❌ "This is wrong"
✅ "This function should return null if user not found, currently returns undefined which breaks the calling code"
```

**✅ Be constructive**:
```
❌ "Bad code"
✅ "This could be refactored to reduce duplication. Consider extracting into a helper function."
```

**✅ Explain why**:
```
❌ "Use const here"
✅ "Use const instead of let since this value never changes. Makes intent clearer and prevents accidental reassignment."
```

**✅ Suggest solutions**:
```
Instead of:
  "This is inefficient"

Try:
  "This loops through the array twice. Consider combining into a single loop:
  [code example]"
```

**✅ Praise good code**:
```
"Nice solution to handle this edge case!"
"Great variable naming here!"
"This refactoring really improved readability!"
```

---

## Review Tone

### Be Kind and Professional

**Remember**:
- You're reviewing code, not the person
- Everyone makes mistakes
- We all have different experience levels
- Goal is better code, not winning arguments

**Good tone**:
```
"I think we could improve this by..."
"Have you considered...?"
"This might be clearer if..."
"Great job on this part!"
```

**Bad tone**:
```
"This is terrible"
"Why would you do this?"
"Obviously wrong"
"I can't believe..."
```

---

## Types of Feedback

### Blocking Issues (Must Fix)

**Critical problems**:
- Breaks functionality
- Security vulnerability
- Violates architecture
- Fails tests

**Comment**:
```
🚫 Request Changes: "This has a SQL injection vulnerability. Must use parameterized queries before merging."
```

### Suggestions (Nice to Have)

**Improvements, not blockers**:
- Better naming
- Refactoring opportunity
- Minor optimizations

**Comment**:
```
💡 Comment: "This works fine, but consider extracting this logic into a utility function for reusability."
```

### Questions

**Understanding intent**:
- Clarify approach
- Understand decisions

**Comment**:
```
❓ Comment: "Why did you choose approach A over approach B? Just curious about the trade-off."
```

### Praise

**Recognition**:
- Good solutions
- Clean code
- Clever approach

**Comment**:
```
✅ Comment: "Really elegant solution to this complex problem!"
```

---

## Review Workflow

### Reviewer Steps

**1. Notification**:
```
"You've been requested to review PR #123"
```

**2. Read PR**:
- Title and description
- Understand purpose

**3. Review commits**:
- See progression
- Understand changes

**4. Review files**:
- Go through each changed file
- Check diff carefully
- Add inline comments

**5. Test locally**:
```
$ Checkout branch in GitHub Desktop
$ Run the code
$ Test functionality
```

**6. Submit review**:
- **Approve** ✅ if good to merge
- **Request changes** ❌ if issues
- **Comment** 💬 if just questions/suggestions

### Author Response

**1. Notification**:
```
"Feedback on your PR #123"
```

**2. Read feedback**:
- All comments
- Understand concerns

**3. Respond**:
- Answer questions
- Agree or discuss
- Explain decisions

**4. Make changes**:
```
$ Address feedback
$ Commit changes
$ Push
```

**5. Request re-review**:
```
"Ready for another look!"
```

---

## Review Checklist

### For Authors

Before requesting review:
- [ ] Self-reviewed all changes
- [ ] All tests pass
- [ ] No debug/console statements
- [ ] Clear PR description
- [ ] Appropriate size (not too large)
- [ ] Single purpose/focus

### For Reviewers

Before approving:
- [ ] Understand what changed and why
- [ ] Checked code quality
- [ ] Looked for bugs
- [ ] Considered edge cases
- [ ] Tested functionality (if possible)
- [ ] No security issues
- [ ] Follows team standards

---

## Common Review Patterns

### Nitpick vs Important

**Nitpick** (don't block on these):
```
"Missing space after comma"
"Could rename `x` to `index`"
"Extra blank line"
```

**Use**: "nit: " prefix or just approve

**Important** (request changes):
```
"Function doesn't handle null case"
"Security vulnerability here"
"This breaks existing feature X"
```

### Alternative Approaches

**When suggesting different approach**:
```
"This works, but here's an alternative that might be clearer:
[code]

Either way is fine, just wanted to share this option."
```

**Not**:
```
"Do it this way instead"
```

---

## Handling Disagreements

### Professional Discussion

**If you disagree with feedback**:

**1. Understand first**:
```
"Can you explain more about why you think approach B is better?"
```

**2. Explain your reasoning**:
```
"I chose approach A because of X and Y constraints. Approach B would require refactoring Z."
```

**3. Find middle ground**:
```
"How about we use approach A now, but file an issue to revisit with approach B later?"
```

**4. Escalate if needed**:
```
"Let's ask [tech lead] for their opinion"
```

### Remember

- **Different != wrong**
- **Multiple valid solutions** exist
- **Learn from each other**
- **Goal is best outcome**, not "winning"

---

## Tools for Review

### GitHub Web Interface

**Built-in features**:
- View diffs
- Add comments
- Suggest changes
- Approve/request changes

### GitHub Desktop

**For testing**:
- Checkout PR branch
- Run locally
- Test thoroughly
- Then review on web

### Browser Extensions

**Enhanced review**:
- Octotree (file tree)
- Refined GitHub (improvements)
- GitHub Code Review (shortcuts)

---

## Review Etiquette

### Do's ✅

- Review promptly
- Be respectful and kind
- Explain reasoning
- Praise good work
- Ask questions
- Suggest, don't demand
- Focus on code, not person

### Don'ts ❌

- Let PRs sit for days
- Be dismissive or rude
- Just say "no" without explaining
- Only criticize, never praise
- Assume malice
- Be condescending
- Make it personal

---

## Learning from Reviews

### As an Author

**When receiving feedback**:
- Don't be defensive
- Ask why if unclear
- Learn patterns
- Apply lessons to future code
- Thank reviewers

**Track common feedback**:
```
"I often forget edge cases"
"Need to improve naming"
"Should add more comments"
```

**Improve over time!**

### As a Reviewer

**Learn too**:
- New patterns
- Different approaches
- Project standards
- How others solve problems

**Everyone grows!**

---

## Key Takeaways

1. **Code review** = Team collaboration
2. **Benefits everyone** - Authors and reviewers learn
3. **Be kind and constructive** - Professional tone
4. **Be specific** - Explain reasoning
5. **Review promptly** - Don't block teammates
6. **Praise good code** - Not just criticism
7. **Focus on what matters** - Don't nitpick
8. **Goal is better code** - Not being "right"

---

## Quick Reference

**As PR Author**:
- Self-review first
- Clear description
- Keep it small
- Respond to feedback
- Be open-minded

**As Reviewer**:
- Review promptly
- Be constructive
- Explain reasoning
- Test if possible
- Praise good work

**Feedback Types**:
- 🚫 Blocking (must fix)
- 💡 Suggestion (nice to have)
- ❓ Question (clarification)
- ✅ Praise (recognition)

---

## What's Next?

You know how to collaborate! Now let's explore advanced GitHub Desktop features.

👉 **Next**: `../07-advanced-features/stashing.md`
