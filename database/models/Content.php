<?php
    class Content {
        private $Id;
        private $Type;
        private $Data;
        private $LessonId;

        public function __construct($Id, $Type, $Data, $LessonId) {
            $this->Id = $Id;
            $this->Type = $Type;
            $this->Data = $Data;
            $this->LessonId = $LessonId;
        }

        public function getId() { return $this->Id; }
        public function getType() { return $this->Type; }
        public function getData() { return $this->Data; }
        public function getLessonId() { return $this->LessonId; }
        
        public function setId($Id) { $this->Id = $Id; }
        public function setType($Type) { $this->Type = $Type; }
        public function setData($Data) { $this->Data = $Data; }
        public function setLessonId($LessonId) { $this->LessonId = $LessonId; }
    }
?>