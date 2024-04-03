// import ShelterCard from "@/components/cards/ShelterCard";

// export default {
//   title: "Components/Cards/ShelterCard",
//   component: ShelterCard,
//   parameters: {
//     layout: "centered",
//   },
// };

// export const ShelterCardComponent = () => ShelterCardComponent;

import ShelterCard from "@/components/cards/ShelterCard";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/ShelterCard",
  component: ShelterCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  // args: {
  //   onBuyNow: fn(),
  //   onAddToCart: fn(),
  // },
} satisfies Meta<typeof ShelterCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
