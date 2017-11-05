<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'cf94605_3');

/** Имя пользователя MySQL */
define('DB_USER', 'cf94605_3');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'DMYR1ECH');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Qw*C;?9o>*UjF{Y90#NY+b9=[`}syVz{,~+LOQ[GO4]Ph(nSReJtc7BsfVm++SDi');
define('SECURE_AUTH_KEY',  'g)ex7v|n *[5^<WW:&0)fvs%ae`64R=f?O4]l%sm zQ*C#>Ib3*afyIp{ZW6u-)S');
define('LOGGED_IN_KEY',    '5=&Vaedd[IlJ%8AA`vG%~(ThrxW^v5|#zAdkNIPsE:]8V|@0!:m7?@ST`l3SD25O');
define('NONCE_KEY',        'UJ~1RzDXm^8Pc*0LiAB[D2&;/,ZJaT/GejF}o8BOv,%UOS-qsf5(KYF=YfRQhh3$');
define('AUTH_SALT',        '-7g<z2=RwPR #aHqOu5QKGZ>Y?Z)<%R4m}b9Z%Ukc <=6#hk.t`S{u4n2y:B;ZU%');
define('SECURE_AUTH_SALT', 'Q`(u4fD,|}|fuR2Yr0%-]Bn7|+G5y3xv<UA?H7K#KQ[8lVt^~A+v#mzWxv:XKNKR');
define('LOGGED_IN_SALT',   '[wZ?6#&L;W!v#T21OmQi!^jD+la<-XrBdW<BV7GyHml.29.sy2rk.Q1[~u;0,s}m');
define('NONCE_SALT',       'a5wFNf:3K<gUovI03I|rW^+p8.#u=B9Naao;xm1_W4Y|Jl,K)9{FCP4EYm!C3+hp');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 * 
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');

define( 'AUTOMATIC_UPDATER_DISABLED', true );
