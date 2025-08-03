const FooterCopyright = () => (
  <div className="footer-copyright">
    Baked fresh in the lab by{' '}
    <a
      href="https://yeastlabs.dev"
      target="_blank"
      rel="noopener noreferrer"
      className="underline transition hover:text-gray-700"
    >
      Yeastlabs
    </a>{' '}
    🍞 © {new Date().getFullYear()}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
