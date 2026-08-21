> ## Documentation Index
> Fetch the complete documentation index at: https://docs.octen.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Pricing

<p style={{ fontSize: "0.8rem", opacity: 0.6 }}>For AI agents: <a href="https://docs.octen.ai/overview/pricing.md">docs.octen.ai/overview/pricing.md</a></p>

## Overview

Our pricing combines a **monthly QPS Plan subscription** with **pay-as-you-go API billing**:

<Steps>
  <Step title="Subscribe to a QPS Plan">
    The Base plan is free by default.
  </Step>

  <Step title="Top up your balance">
    API charges are deducted from your balance in real time.
  </Step>

  <Step title="Pay as you go">
    Charges are based on actual resource consumption (API calls, tokens).
  </Step>
</Steps>

<Tip>All new users receive **\$5 in free balance** upon registration.</Tip>

## QPS Plans

**Free tier:**

| Plan | QPS Limit | Monthly Price | Notes                                       |
| ---- | --------- | ------------- | ------------------------------------------- |
| Free | Up to 10  | \$0           | Default tier for every new account          |
| Base | Up to 20  | \$0           | Unlocked automatically once you add credits |

**QPS plans**, with guaranteed throughput and SLA:

| Plan    | QPS Limit | Monthly Price                    | Best For                              |
| ------- | --------- | -------------------------------- | ------------------------------------- |
| Startup | Up to 50  | <s>\$2,999</s> \$2,099 (30% off) | Early-stage teams going to production |
| Pro     | Up to 200 | \$13,999                         | Growing production workloads          |
| Scale   | Up to 500 | \$33,999                         | High-volume production at scale       |

## API Pricing

### Broad Search and Web Search

A single Broad Search call may include multiple Search API calls.

| Resource        | Price (USD)                         |
| --------------- | ----------------------------------- |
| Search API Call | <s>\$5</s> \$1 / 1k calls (80% off) |
| Full Content    | \$0.001 / 1k tokens                 |

### Image Search and Video Search

| Resource        | Price (USD)    |
| --------------- | -------------- |
| Search API Call | \$5 / 1k calls |

### Extract

| Resource | Price (USD)              |
| -------- | ------------------------ |
| API Call | \$1 / 1k successful URLs |

### Model Gateway

Charges include Search fees (based on the number of search queries) and model usage fees (based on token consumption).

**Token fees:**

| Model                         | Input (USD / 1M tokens)       | Output (USD / 1M tokens)                  | Cache Read (USD / 1M tokens)    | Cache Write (USD / 1M tokens)   |
| ----------------------------- | ----------------------------- | ----------------------------------------- | ------------------------------- | ------------------------------- |
| openai/gpt-5.6-sol            | \$5 (≤272k) / \$10 (>272k)    | \$30 (≤272k input) / \$45 (>272k input)   | \$0.5 (≤272k) / \$1 (>272k)     | \$6.25 (≤272k) / \$12.5 (>272k) |
| openai/gpt-5.6-terra          | \$2 (≤272k) / \$4 (>272k)     | \$12 (≤272k input) / \$18 (>272k input)   | \$0.2 (≤272k) / \$0.4 (>272k)   | \$2.5 (≤272k) / \$5 (>272k)     |
| openai/gpt-5.6-luna           | \$0.2 (≤272k) / \$0.4 (>272k) | \$1.2 (≤272k input) / \$1.8 (>272k input) | \$0.02 (≤272k) / \$0.04 (>272k) | \$0.25 (≤272k) / \$0.5 (>272k)  |
| openai/gpt-5.5-pro            | \$30                          | \$180                                     | -                               | -                               |
| openai/gpt-5.5                | \$5                           | \$30                                      | \$0.5                           | -                               |
| openai/gpt-5.4                | \$2.5                         | \$15                                      | \$0.25                          | -                               |
| anthropic/claude-fable-5      | \$10                          | \$50                                      | \$0.1                           | \$12.5 (5m) / \$20 (1h)         |
| anthropic/claude-opus-5       | \$5                           | \$25                                      | \$0.5                           | \$6.25 (5m) / \$10 (1h)         |
| anthropic/claude-opus-4.8     | \$5                           | \$25                                      | \$0.5                           | \$6.25 (5m) / \$10 (1h)         |
| anthropic/claude-opus-4.6     | \$5                           | \$25                                      | \$0.5                           | \$6.25 (5m) / \$10 (1h)         |
| anthropic/claude-sonnet-5     | \$3                           | \$15                                      | \$0.3                           | \$3.75 (5m) / \$6 (1h)          |
| anthropic/claude-sonnet-4.6   | \$3                           | \$15                                      | \$0.3                           | \$3.75 (5m) / \$6 (1h)          |
| anthropic/claude-haiku-4.5    | \$1                           | \$5                                       | \$0.1                           | \$1.25 (5m) / \$2 (1h)          |
| google/gemini-3.5-flash       | \$1.5                         | \$9                                       | \$0.15                          | -                               |
| google/gemini-3.1-pro-preview | \$2 (≤200k) / \$4 (>200k)     | \$12 (≤200k input) / \$18 (>200k input)   | \$0.2 (≤200k) / \$0.4 (>200k)   | -                               |
| google/gemini-3.1-flash-lite  | \$0.25                        | \$1.5                                     | \$0.025                         | -                               |
| google/gemini-3-flash-preview | \$0.5                         | \$3                                       | \$0.05                          | -                               |
| moonshotai/kimi-k3            | \$3                           | \$15                                      | \$0.3                           | -                               |
| moonshotai/kimi-k2.6          | \$0.95                        | \$4                                       | \$0.16                          | -                               |
| moonshotai/kimi-k2.5          | \$0.6                         | \$3                                       | \$0.1                           | -                               |
| minimax/minimax-m2.5          | \$0.3                         | \$1.2                                     | -                               | -                               |
| qwen/qwen3.6-plus             | \$0.5 (≤256k) / \$2 (>256k)   | \$3 (≤256k input) / \$6 (>256k input)     | \$0.05                          | \$0.625 (5m)                    |
| deepseek/deepseek-v4-pro      | \$1.74                        | \$3.48                                    | \$0.145                         | -                               |
| deepseek/deepseek-v4-flash    | \$0.14                        | \$0.28                                    | \$0.028                         | -                               |

**Image generation token fees:**

| Model                         | Text Input (USD / 1M tokens) | Text Output (USD / 1M tokens) | Image Input (USD / 1M tokens) | Image Output (USD / 1M tokens) |
| ----------------------------- | ---------------------------- | ----------------------------- | ----------------------------- | ------------------------------ |
| openai/gpt-image-2            | \$5                          | -                             | \$8                           | \$30                           |
| openai/gpt-image-1-mini       | \$2                          | -                             | \$2.50                        | \$8                            |
| google/gemini-3-pro-image     | \$2                          | \$12                          | \$2                           | \$120                          |
| google/gemini-3.1-flash-image | \$0.50                       | \$3                           | \$0.50                        | \$60                           |

### Embedding

| Model                | Price (USD / 1M tokens) | Best For                      |
| -------------------- | ----------------------- | ----------------------------- |
| octen-embedding-8b   | \$0.07                  | Best accuracy                 |
| octen-embedding-4b   | \$0.04                  | Balanced performance and cost |
| octen-embedding-0.6b | \$0.01                  | High-volume and low-cost      |

### VL Embedding

Billed by input tokens. Text and multimodal (image / video) inputs are priced differently:

| Model                    | Text (USD / 1M tokens) | Image / Video (USD / 1M tokens) |
| ------------------------ | ---------------------- | ------------------------------- |
| octen-vl-embedding       | \$0.05                 | \$0.12                          |
| octen-vl-embedding-large | \$0.10                 | \$0.25                          |

## Application Pricing

### Answer and Multimodal Chat

Charges include Search fees (based on the number of search queries) and model usage fees (based on token consumption).

### Deep Research

Billed per request, based on the selected tier.

| Tier       | Price (USD / request) |
| ---------- | --------------------- |
| lite       | \$0.2                 |
| standard   | \$1                   |
| pro        | \$2.5                 |
| pro-visual | \$3                   |

### Grounded Generation

Billed per generated output, based on the modality.

| Modality | Price (USD)    |
| -------- | -------------- |
| Image    | \$0.25 / image |
| Video    | \$1 / video    |

## Invoices & Receipts

* Each top-up generates an invoice and receipt.
* Monthly usage statements are available in the [Billing](https://octen.ai/platform/billing) dashboard.

## Contact Us

For custom QPS plans, higher rate limits, or billing inquiries:

<Card title="Get in Touch" icon="envelope" href="mailto:support@octen.ai">
  Reach out to us at **[support@octen.ai](mailto:support@octen.ai)**
</Card>
