"use client";

import { ShoppingCart } from "@/lib/db/cart";
import Image from "next/image";
import cartIcon from "@/assets/printing-cart-icon.png";
import { formatPrice } from "@/lib/format";
import Link from "next/link";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  function closeDropdown() {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  }

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost">
        <div className="indicator">
          <Image src={cartIcon} width={40} height={30} alt="Cart Icon" />
          <span className="badge indicator-item badge-sm">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-30 mt-3 w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold">{cart?.size || 0} Items</span>
          <span className="text-info">
            Subtotal: {formatPrice(cart?.subtotal || 0)}
          </span>
          <div className="card-actions">
            <Link
              href="/cart"
              className="btn btn-primary btn-block"
              onClick={closeDropdown}
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
