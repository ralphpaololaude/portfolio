---
layout: page
title: API Documentation
nav_order: 2
---

# Rewards API Documentation
{: .no_toc }

## On this page
{: .no_toc .text-delta }

- TOC
{:toc}

## Overview

The **Rewards API** enables developers to create, manage, and track customer rewards. It provides a reliable interface for issuing rewards, retrieving reward details, reversing reward transactions, and generating reward histories.
Use cases:
- Create rewards to grant incentives to customers
- Retrieve reward details for validation and tracking
- Reverse rewards to handle cancellations or corrections
- List rewards for reporting, reconciliation, and analytics

## Getting Started

### Pre-requisites

- Active merchant account
- API key (environment-specific)

### Authentication

All requests must include an API key in the header:

    Authorization: Bearer <api_key>

{: .important }
Always secure your API keys. Do not expose API keys in client-side code.

### Environments

<dl>
  <dt>Sandbox URL</dt>
  <dd>https://sandbox.api.matchaio.example/</dd>
  <dt>Production URL</dt>
  <dd>https://api.matchaio.example/</dd>
</dl>

### Quickstart

To do a quick check for a successful call, send a `GET /v1/rewards` request. You should get a 200 OK response with the following structure:

    {
        "limit": 25,
        "next_cursor": null,
        "items": []
    }

## API Endpoints

### Create a reward `POST /v1/rewards`

Add a reward amount to a customer’s order.

#### Request Body

| merchant_id  | string | Unique ID assigned to the merchant|
| order_id  | string | Unique ID assigned to the merchant|
| amount  | number | Unique ID assigned to the merchant|
| currency  | string | Unique ID assigned to the merchant|
| customer  | object | Unique ID assigned to the merchant|