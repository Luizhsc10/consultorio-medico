export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verifique Seu E-mail</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f7fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1d1d1f;">
  <div style="max-width: 640px; margin: 72px auto 40px; padding: 0 20px;">
    <div style="background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08); border: 1px solid rgba(0,0,0,0.04);">
      
      <div style="background: linear-gradient(135deg, #0a84ff, #5ac8fa); padding: 38px 28px 34px; text-align: left;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
    <tr>
      <td style="width: 88px; vertical-align: middle;">
        <img
          src="https://i.postimg.cc/RhHSFt8R/logo.jpg"
          alt="Logo"
          style="display: block; width: 56px; height: 56px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 14px rgba(0,0,0,0.12);"
        />
      </td>
      <td style="vertical-align: middle; padding-left: 20px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.1;">
          Verifique Seu E-mail
        </h1>
        <p style="color: rgba(255,255,255,0.88); margin: 8px 0 0; font-size: 15px;">
          Confirme seu cadastro com segurança
        </p>
      </td>
    </tr>
  </table>
</div>

      <div style="padding: 40px 32px; background-color: #ffffff;">
        <p style="margin: 0 0 18px; font-size: 17px; color: #1d1d1f;">Olá,</p>

        <p style="margin: 0 0 18px; font-size: 16px; line-height: 1.7; color: #3a3a3c;">
          Obrigado por se cadastrar. Seu código de verificação é:
        </p>

        <div style="text-align: center; margin: 36px 0;">
          <div style="display: inline-block; background: linear-gradient(135deg, #f0f7ff, #e5f1ff); border: 1px solid #cfe4ff; border-radius: 20px; padding: 20px 28px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.8);">
            <span style="font-size: 34px; font-weight: 700; letter-spacing: 8px; color: #0071e3;">
              {verificationCode}
            </span>
          </div>
        </div>

        <p style="margin: 0 0 14px; font-size: 16px; line-height: 1.7; color: #3a3a3c;">
          Digite este código na página de verificação para concluir seu cadastro.
        </p>

        <p style="margin: 0 0 14px; font-size: 15px; line-height: 1.7; color: #6e6e73;">
          Este código expirará em 15 minutos por motivos de segurança.
        </p>

        <p style="margin: 0 0 24px; font-size: 15px; line-height: 1.7; color: #6e6e73;">
          Se você não criou uma conta conosco, por favor ignore este e-mail.
        </p>

        <div style="height: 1px; background: linear-gradient(to right, transparent, #d2d2d7, transparent); margin: 28px 0;"></div>

        <p style="margin: 0; font-size: 15px; color: #3a3a3c;">
          Atenciosamente,<br>
          <span style="color: #0071e3; font-weight: 600;">Equipe Clinica Suzana Silveira</span>
        </p>
      </div>
    </div>

    <div style="text-align: center; margin-top: 18px; padding: 0 10px;">
      <p style="margin: 0; font-size: 12px; color: #8e8e93; line-height: 1.6;">
        Esta é uma mensagem automática, por favor não responda este e-mail.
      </p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Senha Redefinida com Sucesso</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Senha Redefinida com Sucesso</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Olá,</p>
    <p>Estamos entrando em contato para confirmar que sua senha foi redefinida com sucesso.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>Se você não solicitou essa redefinição de senha, entre em contato com nossa equipe de suporte imediatamente.</p>
    <p>Por motivos de segurança, recomendamos que você:</p>
    <ul>
      <li>Use uma senha forte e exclusiva</li>
      <li>Ative a autenticação em dois fatores, se disponível</li>
      <li>Evite usar a mesma senha em vários sites</li>
    </ul>
    <p>Obrigado por nos ajudar a manter sua conta segura.</p>
    <p>Atenciosamente,<br>Equipe do App</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>Esta é uma mensagem automática, por favor não responda este e-mail.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redefina Sua Senha</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Redefinição de Senha</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Olá,</p>
    <p>Recebemos uma solicitação para redefinir sua senha. Se você não fez essa solicitação, por favor ignore este e-mail.</p>
    <p>Para redefinir sua senha, clique no botão abaixo:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Redefinir Senha</a>
    </div>
    <p>Este link expirará em 1 hora por motivos de segurança.</p>
    <p>Atenciosamente,<br>Equipe do App</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>Esta é uma mensagem automática, por favor não responda este e-mail.</p>
  </div>
</body>
</html>
`;
