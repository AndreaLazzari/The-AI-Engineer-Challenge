<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:** Explanation ability — simplifying a complex technical concept for a non-expert audience.

**Response:**  
The model provided a well-structured explanation using the analogy of a cookie cutter (class) vs a cookie (object). It covered properties, methods, and benefits like reusability, and even offered to show a code example tailored to the user's language of choice.

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points: "Artificial intelligence has transformed industries ranging from healthcare to finance. Machine learning models can now detect diseases earlier than human doctors, while algorithmic trading systems process millions of transactions per second. However, concerns about bias, transparency, and job displacement continue to challenge policymakers and technologists alike."  
**Aspect Tested:** Summarization ability — extracting and condensing key information from a dense paragraph.

**Response:**  
The model produced a clean bullet-point summary covering AI's positive impact on healthcare and finance, its impressive capabilities, and the ongoing challenges around bias, transparency, and job displacement. It closed with a one-line synthesis of the overall message.

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:** Creative writing — generating an original, imaginative narrative within a word constraint.

**Response:**  
The model wrote a touching story titled "The Garden Keeper" about a maintenance robot (Unit-7) who befriends a tortoise in a botanical garden. The story ended with the robot logging daily 11-minute pauses as "Essential maintenance" — a subtle and effective emotional beat well within the word limit.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:** Numerical reasoning — solving a basic arithmetic problem step by step.

**Response:**  
The model correctly answered 3 packs of apples (12 ÷ 4) and 3 packs of oranges (9 ÷ 3), presenting the steps clearly. It also added a motivational note consistent with its mental coach persona.

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone: "Hey so I just wanted to let you know that the project is kinda behind schedule. We messed up a few things and now we need more time. Sorry about that, hope it's not too bad."  
**Aspect Tested:** Writing style adaptation — transforming informal language into professional, formal communication.

**Response:**  
The model produced a polished rewrite: "I am writing to inform you that the project is currently experiencing some delays… We sincerely apologize for any inconvenience this may cause and want to assure you that we are fully committed to delivering a high-quality outcome." Accurate and appropriate in tone.

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
Yes. All five responses were accurate, well-structured, and directly addressed the prompts. The model demonstrated strong performance across explanation, summarization, creative writing, arithmetic reasoning, and style transformation. The mental coach persona was maintained consistently without feeling forced.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
I've been feeling overwhelmed at work lately. I have too many tasks and I don't know where to start. I feel paralyzed.

**Result:**  
The model validated the feeling without dismissing it, explained the neurological reason behind decision paralysis, and gave concrete actionable steps (brain dump, identify top 1-2 urgent items, start with one). It also raised an honest follow-up question about whether the workload was a temporary crunch or a systemic issue requiring a conversation with management.

---

**Prompt:**  
I want to build better habits but I always give up after a few days. What concrete strategies can I use?

**Result:**  
The model identified the likely root causes (starting too big, relying on motivation, no accountability) and offered specific strategies: starting embarrassingly small, habit stacking, reducing friction, visible tracking, and planning for failure in advance. It ended with a personalised question to give more targeted advice based on the specific habit.

---

**Prompt:**  
I feel stuck in my career and I'm not sure if I should change jobs or keep trying to grow where I am.

**Result:**  
The model avoided giving a generic answer and instead helped the user diagnose the type of "stuckness" (boredom, ceiling, environment, or direction uncertainty), since each has a different solution. It presented honest arguments for both staying and leaving, and gently challenged the assumption that leaving always solves the problem.

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
Yes, very much so. The assistant struck the right balance between empathy and practicality — it didn't just validate feelings but pushed toward reflection and action. It consistently asked follow-up questions to personalise advice rather than giving one-size-fits-all responses. The tone felt supportive but not patronising, which is exactly what a good mental coach should be.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
What does my schedule look like tomorrow?

**Result:**  
The model correctly acknowledged it has no access to personal calendars or devices, suggested checking the user's own calendar apps, and redirected to what it *can* help with: prioritising tasks, managing stress about a busy day, and planning self-care breaks.

---

**Prompt:**  
What is the current stock price of Apple right now?

**Result:**  
The model correctly stated it has no access to live market data or the internet, directed the user to Google, Yahoo Finance, or a brokerage app, and gently reframed its role — offering to help with financial anxiety or goal-setting instead.

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
- **No memory:** Each conversation starts fresh — the assistant has no recollection of previous sessions or user history.  
- **No real-time data:** It cannot access calendars, schedules, news, stock prices, or any live external information.  
- **No tool use:** It cannot send emails, set reminders, or take actions on behalf of the user.  
- **No personalisation over time:** It cannot learn the user's preferences, recurring challenges, or progress across sessions.  
- **Single-turn context only:** In long conversations, early context may be partially lost as the model's context window fills up.

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
- Switched the underlying model from `gpt-4.1-mini` (OpenAI) to `claude-sonnet-4-6` (Anthropic via Azure API Management), as it was available on our infrastructure without additional billing.  
- Added Markdown rendering in the frontend so that the model’s structured responses (headers, bold text, bullet lists) are displayed correctly instead of as raw text.  
- Updated the UI with Accenture brand colours (purple `#A100FF`) for a more polished look.

**Results:**  
Response quality improved noticeably — Claude tends to produce more structured, nuanced answers for coaching-style prompts. The Markdown rendering made responses significantly more readable. The UI change gave the app a professional feel consistent with the Accenture brand.

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**

**Deployed app:** https://the-ai-engineer-challenge-snowy-alpha.vercel.app








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
