import {
  Tailwind,
  Button,
  Html,
  Head,
  Font,
  Preview,
  Container,
  Text,
  Img,
  Link,
  Hr,
  Column,
  Row,
  Body,
  Heading,
} from "@react-email/components";
import { tailwindConfig, toHumanReadableDiff } from "@/emails/utils";
import { format } from "date-fns";
import { config } from "@/emails/config";

interface MagicLinkEmailProps {
  name?: string;
  link: string;
  expiresAt: Date;
}

console.log("baseurl", process.env.BASE_URL);

const MagicLinkEmail = ({
  name = "there",
  link,
  expiresAt,
}: MagicLinkEmailProps) => {
  return (
    <Html lang="en">
      <Preview>
        Hello {name}, please click the link below to sign in to {config.name}.
      </Preview>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind config={tailwindConfig}>
        <Body className="mx-auto my-auto bg-white px-2">
          <Container>
            <Column className="rounded-lg px-4 py-2">
              <Row>
                <Img src={config.logo} className="h-10 w-10" />
              </Row>
              <Hr className="my-6" />
              <Row>
                <Heading className="mb-4 text-lg font-semibold leading-tight text-foreground">
                  Hello, {name} 👋
                </Heading>
                <Text className="mb-4 text-base leading-tight text-foreground">
                  You requested a sign in link for {config.name}. Please click
                  the link below to sign in.
                </Text>
                <Button
                  href={link}
                  className="rounded-lg bg-primary px-12 py-2 text-center font-medium leading-4 text-primary-foreground"
                >
                  Sign in
                </Button>
                <Text className="mt-6 text-sm leading-tight text-muted-foreground">
                  {format(expiresAt, "eeee, MMMM do, yyyy 'at' HH:mm 'UTC'")}.
                  The link will expire in{" "}
                  {toHumanReadableDiff({
                    start: new Date(),
                    end: new Date(
                      expiresAt.setMinutes(expiresAt.getMinutes() + 1),
                    ),
                  })}{" "}
                </Text>
                <Text className="-mt-2 text-sm leading-tight text-muted-foreground">
                  Alternatively, you can copy and paste the following link into
                  your browser: <br />
                  <Link href={link} className="text-foreground underline">
                    {link}
                  </Link>
                </Text>
                <Text className="mt-2 text-xs leading-tight text-muted-foreground">
                  If you didn't request this, you can safely ignore this email.
                </Text>
              </Row>
              <Hr />
              <Row>
                <Text className="text-xs font-medium leading-tight tracking-tight text-muted-foreground">
                  © {new Date().getFullYear()} {config.name}. All rights
                  reserved.
                </Text>
              </Row>
            </Column>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MagicLinkEmail;

MagicLinkEmail.PreviewProps = {
  name: "Mohamed",
  link: `${config.baseURL}/magic-link?token=123`,
  // 6 hours
  expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000),
} as MagicLinkEmailProps;
