<?php
    class Database {
        private $connection;
        private $result = null;
        private $magic_quotes_active;
        private $real_escape_string_exists;
        private static $instance;
        public function __construct(){
            $this->magic_quotes_active = get_magic_quotes_gpc();
            $this->real_escape_string_exists = function_exists( "mysql_real_escape_string" );
        }
        public static function getInstance() {
            if (!self::$instance)
            {
                $dbCon = new Database();
                $dbCon->connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
                self::$instance = $dbCon;
            }
            return self::$instance;
        }
        function connect($address, $account, $pwd, $name) {
            $this->connection = mysqli_connect($address, $account, $pwd);
            mysqli_set_charset($this->connection,"utf8");
            if (!$this->connection){
                die("Database connection failed: " . mysqli_error());
            }
            else{
                $dbSelect = mysqli_select_db($this->connection, $name);
                if(!$dbSelect){
                    die("Database selection failed: " . mysqli_error());
                }
            }
        }
        public function closeConnect(){
            if ($this->connection)
            {
                mysqli_close($this->connection);
                unset($this->connection);
            }
        }
        public function sqlQuote( $value ){
            return addslashes( $value );
        }
        public function query($sql){
            $this->result = mysqli_query($this->connection,$sql);
            mysqli_set_charset($this->connection,"utf8");
            if (!$this->result){
                $output = "Database query failed: " . mysqli_error($this->connection) . "<br /><br />";
                die($output);
            }
            return $this->result;
        }
        public function fetch_array($first_row = FALSE){
            if ($this->result){
                if(!$first_row)
                {
                    $rows = array();
                    while( $row = mysqli_fetch_array($this->result))
                    {
                        $rows[] = $row;
                    }
                }
                else
                {
                    $rows = mysqli_fetch_array($this->result);
                }
            }
            return $rows;
        }
        public function num_row(){
            if($this->result){
                $num = null;
                $num = mysqli_num_rows($this->result);
            }
            return $num;
        }
        public function fetch_object($first_row = FALSE){
            if ($this->result){
                if(!$first_row)
                {
                    $rows = array();
                    while( $row = mysqli_fetch_object($this->result))
                    {
                        $rows[] = $row;
                    }
                }
                else
                {
                    $rows = mysqli_fetch_object($this->result);
                }
            }
            return $rows;
        }
        public function processRowSet($rowSet, $singleRow=false)
        {
            $resultArray = array();
            while($row = mysqli_fetch_assoc($rowSet))
            {
                array_push($resultArray, $row);
            }
            if($singleRow === true)
                return $resultArray[0];
            return $resultArray;
        }
        public function select($table, $where) {
            $sql = "SELECT * FROM $table WHERE $where";
            $result = mysqli_query($this->connection,$sql);
            if(mysqli_num_rows($result) == 1)
                return $this->processRowSet($result, true);
            $this->closeConnect();
            return $this->processRowSet($result);

        }
        public function selectall($table, $where) {
            $sql = "SELECT * FROM $table WHERE $where";
            $this->result = mysqli_query($this->connection,$sql);
            return $this->processRowSet($this->result);
        }
        public function delete($table, $where){
            $sql="DELETE FROM $table WHERE $where";
            mysqli_query($this->connection,$sql) or die(mysqli_error($this->connection));
            return true;
        }
        public function insert($data, $table) {
            $columns = "";
            $values = "";
            foreach ($data as $column => $value) {
                $columns .= ($columns == "") ? "" : ", ";
                $columns .= $column;
                $values .= ($values == "") ? "'" : ", '";
                $values .= $value."' ";
            }
            $sql = "INSERT INTO $table ($columns) values ($values)";
            mysqli_query($this->connection,$sql) or die(mysqli_error($this->connection));
            return mysqli_insert_id($this->connection);
        }
        public function update($data, $table, $where) {
            $changes = "";
            foreach ($data as $column => $value) {
                $changes .= ($changes == "") ? "" : ", ";
                $changes .= $column."= '".$value."' ";
            }
            $sql = "UPDATE $table SET $changes WHERE $where";
            mysqli_query($this->connection,$sql) or die(mysqli_error($this->connection));
            return true;
        }
    }
?>